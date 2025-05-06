import { db } from '$lib/server/db/index';
import { event } from '$lib/server/db/schema';

export function load() {
	const events = db.select().from(event);
	return { events };
}
