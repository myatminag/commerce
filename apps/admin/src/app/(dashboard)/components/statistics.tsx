"use client";

import { Badge } from "@workspace/ui/components/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

import { TrendingUpIcon } from "@/src/components/icons/trending-up-icon";

export const Statistics = () => {
  return (
    <div className="*:data-[slot=card]:border-border-300 grid grid-cols-1 gap-4 *:data-[slot=card]:h-[100px] *:data-[slot=card]:bg-white *:data-[slot=card]:shadow-none lg:grid-cols-2 xl:grid-cols-4">
      <Card className="@container/card py-5">
        <CardHeader className="relative flex items-center gap-x-3 px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            fill="none"
            viewBox="0 0 42 42"
          >
            <rect width="42" height="42" fill="#E8FFF8" rx="10"></rect>
            <path
              fill="#04A88C"
              fillRule="evenodd"
              d="m11.29 19.862 3.66-3.46h.002a2.03 2.03 0 0 1-.2-1.888 2.06 2.06 0 0 1 1.453-1.237 2.09 2.09 0 0 1 1.858.475c.503.45.75 1.115.663 1.78l2.72.847c.28-.527.778-.908 1.364-1.043a2.08 2.08 0 0 1 1.688.336l3.669-3.487a2.03 2.03 0 0 1 .422-2.732 2.087 2.087 0 0 1 2.79.175c.745.764.775 1.963.07 2.763a2.085 2.085 0 0 1-2.778.311L25 16.188a2.03 2.03 0 0 1 .205 1.889 2.07 2.07 0 0 1-1.453 1.24 2.09 2.09 0 0 1-1.86-.473 2.03 2.03 0 0 1-.664-1.781l-2.72-.848v.001c-.28.528-.777.908-1.364 1.044a2.1 2.1 0 0 1-1.692-.341l-3.663 3.46h.002a2.03 2.03 0 0 1-.431 2.73 2.085 2.085 0 0 1-2.788-.183 2.03 2.03 0 0 1-.06-2.761 2.084 2.084 0 0 1 2.776-.303"
              clipRule="evenodd"
            ></path>
            <path
              fill="#04A88C"
              d="M14.99 25.207h-4.412c-.22 0-.4.185-.4.414v5.969c0 .228.18.413.4.413h4.411c.221 0 .4-.185.4-.413v-5.97a.407.407 0 0 0-.4-.413m-.4 5.97h-3.612v-5.143h2.611a1 1 0 0 1 1 1zm6.648-9.87h-4.411c-.22 0-.4.185-.4.413v9.87c0 .228.18.413.4.413h4.411c.221 0 .4-.185.4-.413v-9.87a.407.407 0 0 0-.4-.413m-.4 9.87h-3.611v-9.043h3.611zm6.65-7.868h-4.412c-.22 0-.4.185-.4.413v7.868c0 .229.18.414.4.414h4.411c.221 0 .4-.185.4-.414v-7.868a.407.407 0 0 0-.4-.413m-.4 7.868h-3.612v-7.042h3.611zm6.648-13.411h-4.411c-.22 0-.4.185-.4.413V31.59c0 .228.18.413.4.413h4.411c.221 0 .4-.185.4-.413V18.179a.407.407 0 0 0-.4-.413m-.4 13.41h-3.611V18.593h3.611z"
            ></path>
          </svg>
          <div className="flex w-full flex-col gap-y-3">
            <div className="flex w-full items-center justify-between">
              <CardDescription className="text-sm font-light">
                Total Revenue
              </CardDescription>
              <Badge className="flex gap-1 rounded-lg p-0 text-xs text-[#2F59CA]">
                <TrendingUpIcon className="size-4" />
                14.2%
              </Badge>
            </div>
            <CardTitle className="@[250px]/card:text-lg font-semibold tabular-nums">
              231,000.00 Ks
            </CardTitle>
          </div>
        </CardHeader>
      </Card>
      <Card className="@container/card py-5">
        <CardHeader className="relative flex items-center gap-x-3 px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            fill="none"
            viewBox="0 0 42 42"
          >
            <rect width="42" height="42" fill="#E9F3FF" rx="10"></rect>
            <g clipPath="url(#clip0_100_81)">
              <path
                fill="#0FC5A6"
                d="M13.188 21h3.124v2.344a.78.78 0 0 1-.78.781h-1.563a.78.78 0 0 1-.781-.781zM25.688 21h3.125v2.344a.78.78 0 0 1-.782.781H26.47a.78.78 0 0 1-.782-.781zM19.438 11.625h3.125v2.344a.78.78 0 0 1-.782.781H20.22a.78.78 0 0 1-.782-.781z"
              ></path>
              <path
                fill="#039DCC"
                d="M32.719 29.594h-.14c.09-.25.138-.515.14-.782v-6.25a2.344 2.344 0 0 0-2.344-2.343h-4.047c.091-.25.139-.515.14-.782v-6.25a2.344 2.344 0 0 0-2.343-2.343h-6.25a2.344 2.344 0 0 0-2.344 2.344v6.25c.002.266.05.53.14.78h-4.046a2.344 2.344 0 0 0-2.344 2.345v6.25c.002.266.05.53.14.78h-.14a.781.781 0 1 0 0 1.563H32.72a.781.781 0 1 0 0-1.562M17.094 19.437v-6.25a.78.78 0 0 1 .781-.78h6.25a.78.78 0 0 1 .781.78v6.25a.78.78 0 0 1-.781.782h-6.25a.78.78 0 0 1-.781-.782m4.828 10.157h-1.844c.091-.25.139-.515.14-.782v-6.25a2.4 2.4 0 0 0-.14-.78h1.844c-.091.25-.139.514-.14.78v6.25c.001.267.049.531.14.782m-10.297 0a.78.78 0 0 1-.781-.782v-6.25a.78.78 0 0 1 .781-.78h6.25a.78.78 0 0 1 .781.78v6.25a.78.78 0 0 1-.781.782zm12.5 0a.78.78 0 0 1-.781-.782v-6.25a.78.78 0 0 1 .781-.78h6.25a.78.78 0 0 1 .781.78v6.25a.78.78 0 0 1-.781.782z"
              ></path>
              <path
                fill="#039DCC"
                d="M13.969 28.031h-.781a.781.781 0 1 1 0-1.562h.78a.781.781 0 1 1 0 1.562M26.469 28.031h-.782a.781.781 0 1 1 0-1.562h.782a.781.781 0 1 1 0 1.562M20.219 18.656h-.782a.781.781 0 1 1 0-1.562h.782a.781.781 0 1 1 0 1.562"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_100_81">
                <path fill="#fff" d="M8.5 8.5h25v25h-25z"></path>
              </clipPath>
            </defs>
          </svg>
          <div className="flex w-full flex-col gap-y-3">
            <div className="flex w-full items-center justify-between">
              <CardDescription className="text-sm font-light">
                Total Orders
              </CardDescription>
              <Badge className="flex gap-1 rounded-lg p-0 text-xs text-[#2F59CA]">
                <TrendingUpIcon className="size-4" />
                +12.4%
              </Badge>
            </div>
            <CardTitle className="@[250px]/card:text-lg font-semibold tabular-nums">
              134
            </CardTitle>
          </div>
        </CardHeader>
      </Card>
      <Card className="@container/card py-5">
        <CardHeader className="relative flex items-center gap-x-3 px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            fill="none"
            viewBox="0 0 42 42"
          >
            <rect width="42" height="42" fill="#FFF3EC" rx="10"></rect>
            <path
              fill="#CA720D"
              d="M21 21a5.25 5.25 0 1 0 0-10.499A5.25 5.25 0 0 0 21 21m0-9a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5M21.75 22.5h-1.5A8.25 8.25 0 0 0 12 30.75a.75.75 0 0 0 .75.75h16.5a.75.75 0 0 0 .75-.75 8.25 8.25 0 0 0-8.25-8.25M13.545 30a6.75 6.75 0 0 1 6.705-6h1.5a6.75 6.75 0 0 1 6.705 6z"
            ></path>
          </svg>
          <div className="flex w-full flex-col gap-y-3">
            <div className="flex w-full items-center justify-between">
              <CardDescription className="text-sm font-light">
                Total Customers
              </CardDescription>
              <Badge className="flex gap-1 rounded-lg p-0 text-xs text-[#2F59CA]">
                <TrendingUpIcon className="size-4" />
                +12.4%
              </Badge>
            </div>
            <CardTitle className="@[250px]/card:text-lg font-semibold tabular-nums">
              456
            </CardTitle>
          </div>
        </CardHeader>
      </Card>
      <Card className="@container/card py-5">
        <CardHeader className="relative flex items-center gap-x-3 px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            fill="none"
            viewBox="0 0 42 42"
          >
            <rect width="42" height="42" fill="#FCF0FF" rx="10"></rect>
            <path
              fill="#C942EA"
              d="M27 13.5h-1.5A1.5 1.5 0 0 0 24 12h-.75v-.75a2.25 2.25 0 0 0-4.5 0V12H18a1.5 1.5 0 0 0-1.5 1.5H15a2.25 2.25 0 0 0-2.25 2.25v15A2.25 2.25 0 0 0 15 33h6.75a.75.75 0 1 0 0-1.5H15a.75.75 0 0 1-.75-.75v-15A.75.75 0 0 1 15 15h1.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5H27a.75.75 0 0 1 .75.75v6a.75.75 0 1 0 1.5 0v-6A2.25 2.25 0 0 0 27 13.5m-6.75-2.25a.75.75 0 1 1 1.5 0V12h-1.5zM18 15v-1.5h6V15z"
            ></path>
            <path
              fill="#F045CE"
              d="M21.75 27a.75.75 0 1 1 .533-.218.8.8 0 0 1-.533.218M17.25 27.75a.75.75 0 0 1-.533-.218l-.75-.75a.753.753 0 0 1 1.065-1.065l.218.225.967-.975a.752.752 0 1 1 1.065 1.065l-1.5 1.5a.75.75 0 0 1-.532.217M25.5 21h-3.75a.75.75 0 1 1 0-1.5h3.75a.75.75 0 1 1 0 1.5M17.25 21.75a.75.75 0 0 1-.533-.218l-.75-.75a.753.753 0 0 1 1.065-1.065l.218.225.967-.975a.753.753 0 1 1 1.065 1.065l-1.5 1.5a.75.75 0 0 1-.532.217M27 24.75h3V27a.75.75 0 0 1-.75.75h-1.5A.75.75 0 0 1 27 27z"
            ></path>
            <path
              fill="#C942EA"
              d="M30.75 33h-4.5A2.25 2.25 0 0 1 24 30.75v-4.5A2.25 2.25 0 0 1 26.25 24h4.5A2.25 2.25 0 0 1 33 26.25v4.5A2.25 2.25 0 0 1 30.75 33m-4.5-7.5a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 .75.75h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75z"
            ></path>
          </svg>
          <div className="flex w-full flex-col gap-y-3">
            <div className="flex w-full items-center justify-between">
              <CardDescription className="text-sm font-light">
                Total Refunds
              </CardDescription>
              <Badge className="text-danger-500 flex gap-1 rounded-lg p-0 text-xs">
                <TrendingUpIcon className="size-4" />
                10.4%
              </Badge>
            </div>
            <CardTitle className="@[250px]/card:text-lg font-semibold tabular-nums">
              456,00.00 Ks
            </CardTitle>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
