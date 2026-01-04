import { EvershopRequest, EvershopResponse } from '@evershop/evershop';
import {
	rollback,
	insert,
	commit,
	startTransaction,
} from '@evershop/postgres-query-builder';
import { getConnection } from '@evershop/evershop/lib/postgres';

export default async (
	request: EvershopRequest,
	response: EvershopResponse,
	type: string,
	attributeName: string,
	attributeCode: string,
	isRequired: boolean,
	displayOnFrontend: boolean,
	sortOrder: number,
	isFilterable: boolean
) => {
	const connection = await getConnection();
	await startTransaction(connection);
	try {
		await insert('attribute')
			.given({
				attribute_code: attributeCode,
				attribute_name: attributeName,
				type: type,
				is_required: isRequired,
				display_on_frontend: displayOnFrontend,
				sort_order: sortOrder,
				is_filterable: isFilterable,
			})
			.execute(connection);
		await commit(connection);
	} catch (e) {
		await rollback(connection);
	}
};
