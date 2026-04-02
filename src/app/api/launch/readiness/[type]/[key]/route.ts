import { NextRequest, NextResponse } from 'next/server';
import { mockLaunchData } from '@/lib/mock-launch-data';

export function GET(
  request: NextRequest,
  { params }: { params: { type: string; key: string } }
) {
  const { type, key } = params;
  const launchObject = mockLaunchData.find(
    (obj) => obj.object_type === type && obj.key === key
  );

  if (launchObject) {
    return NextResponse.json(launchObject);
  } else {
    return NextResponse.json({ error: 'Not Found' }, { status: 404 });
  }
}
