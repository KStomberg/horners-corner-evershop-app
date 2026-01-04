import { pool } from "@evershop/evershop/lib/postgres";
import { select } from "@evershop/postgres-query-builder";

const attributeGroups = await select()
  .from("attribute_group")
  .load(pool);
console.log("pool", pool)