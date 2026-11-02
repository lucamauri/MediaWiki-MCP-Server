import { z } from 'zod';

// No schema default: an omitted `bot` defers to the wiki's `bot` setting, which
// a default of false would override.
export const botArgSchema = z
	.boolean()
	.optional()
	.describe(
		'Marks the edit as a bot edit, which Special:RecentChanges hides by default. When omitted, the bot setting of the wiki decides; pass false to leave one edit unflagged. Takes effect only when the account has the `bot` right, and a bot password or OAuth consumer also needs the High-volume (bot) access grant; otherwise the edit saves unflagged and the response reports botMarked: false.',
	);
