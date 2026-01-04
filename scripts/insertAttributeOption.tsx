import { EvershopRequest, EvershopResponse } from '@evershop/evershop';
import {
	rollback,
	insert,
	commit,
	startTransaction,
} from '@evershop/postgres-query-builder';
import { getConnection } from '@evershop/evershop/lib/postgres';
import { UUID } from 'node:crypto';

export default async (
	request: EvershopRequest,
	response: EvershopResponse,
	uuid: UUID,
	attributeId: number,
	attributeCode: string,
	optionText: string
) => {
	const connection = await getConnection();
	await startTransaction(connection);
	try {
		await insert('attribute_option')
			.given({
				uuid: self.crypto.randomUUID(),
				attributeId: attributeId,
				attribute_code: attributeCode,
				option_text: optionText,
			})
			.execute(connection);
		await commit(connection);
	} catch (e) {
		await rollback(connection);
	}
};
