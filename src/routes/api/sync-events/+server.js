import { google } from 'googleapis';
import { json } from '@sveltejs/kit';
import { readFileSync } from 'fs';

export async function GET() {
	try {
		const SERVICE_ACCOUNT_KEY = JSON.parse(readFileSync('./service-account.json', 'utf8'));

		const auth = new google.auth.JWT({
			email: SERVICE_ACCOUNT_KEY.client_email,
			key: SERVICE_ACCOUNT_KEY.private_key,
			scopes: ['https://www.googleapis.com/auth/calendar.readonly']
		});

		const calendar = google.calendar({ version: 'v3', auth });

		const res = await calendar.events.list({
			calendarId:
				'bf6fc15f9758049a988d65ee2b16da45a442d529e9e76dac5528e42afcda500b@group.calendar.google.com',
			timeMin: new Date().toISOString(),
			maxResults: 10,
			singleEvents: true,
			orderBy: 'startTime',
			fields: 'items(summary,description,start,end,location)' // Only fetch needed fields
		});

		return json(res.data.items);
	} catch (err) {
		console.log('Error fetching calendar events:', err);
	}
}
