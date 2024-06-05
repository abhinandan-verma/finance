import { format } from 'date-fns';
import React from 'react'
import {
    Tooltip,
    XAxis,
    Area,
    AreaChart,
    ResponsiveContainer,
    CartesianGrid
} from "recharts"
import CustomToolTip from './custom-tooltip';

type Props = {
    data?: {
        date: string;
        income: number;
        expenses: number;
    }[];
}

function AreaVariant(
    {
        data = []
    }: Props
) {
  return (
    <ResponsiveContainer height={350} className="w-full" width={600}>
        <AreaChart data={data} >
            <CartesianGrid strokeDasharray="3 3"/>
            <defs>
                <linearGradient id='income' x1="0" y1="0" x2="0" y2="1">
                    <stop offset={"2%"} stopColor='#3d82f6' strokeOpacity={0.8} />
                    <stop offset={"98%"} stopColor='#3d82f6' strokeOpacity={0} />
                </linearGradient>
                <linearGradient id='expenses' x1={0} y1={0} x2={0} y2={1}>
                    <stop offset={"2%"} stopColor='#f43f5e' strokeOpacity={0.8} />
                    <stop offset={"98%"} stopColor='#f43f5e' strokeOpacity={0} />
                </linearGradient>
            </defs>
            <XAxis
             axisLine={false}
             tickLine={false}
             dataKey={"date"}
             tickFormatter={(value) => format(value, "dd MMM")}
             style={{ fontSize: "12px"}}
             tickMargin={16}
            />
            <Tooltip content={<CustomToolTip/>}/>
            <Area
             type={'monotone'}
             dataKey={'income'}
             stackId={'income'}
             strokeWidth={2}
             stroke='#3d82f6'
             fill='url(#income)'
             className='drop-shadow-sm'
            />
            <Area
             type={'monotone'}
             dataKey={'expenses'}
             stackId={'expenses'}
             strokeWidth={2}
             stroke='#f43f5e'
             fill='url(#expenses)'
             className='drop-shadow-sm'
            />
        </AreaChart>
    </ResponsiveContainer>
  )
}

export default AreaVariant