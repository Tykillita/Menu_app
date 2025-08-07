import { track } from '@vercel/analytics/server';
import { reportValue } from 'flags';
 
export async function GET() {
  reportValue('summer-sale', false);
  track('My Event', {}, { flags: ['summer-sale'] });
 
  return Response.json({ ok: true });
}