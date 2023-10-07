import {NextResponse} from 'next/server';
import {SeriesService} from '@/backend/services/series';


export const GET = async (req: Request) => {
    const service = await SeriesService.getInstance();
    const list = service.getList();
    return NextResponse.json({series: list});
}