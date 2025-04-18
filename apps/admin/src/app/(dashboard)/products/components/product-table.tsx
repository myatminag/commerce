"use client";

import { useState } from "react";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { DateRange } from "react-day-picker";
import { CalendarDaysIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover";
import { cn } from "@workspace/ui/lib/utils";
import { Label } from "@workspace/ui/components/label";
import { Input } from "@workspace/ui/components/input";
import { Button } from "@workspace/ui/components/button";
import { Calendar } from "@workspace/ui/components/calendar";
import { DataTable } from "@workspace/ui/components/data-table";

import column from "./columns";
import Filter from "./filter";
import { products } from "./data";

const CategoryTable = () => {
  const { register, reset, handleSubmit } = useForm();

  const [date, setDate] = useState<DateRange | undefined>();

  const onSubmit = () => {};

  return (
    <div className="space-y-6">
      <Filter />

      <Card className="border-border-300 col-span-4 flex flex-col">
        <CardHeader className="flex items-center justify-between pb-0">
          <CardTitle className="text-2md">Products (32)</CardTitle>
          <Dialog>
            <DialogTrigger
              type="button"
              className="border-border-300 flex h-10 cursor-pointer items-center gap-x-1.5 rounded-lg border px-2.5 text-sm font-semibold text-neutral-950"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  fill="#93FCDF"
                  fillRule="evenodd"
                  d="M8.028 1.453a1.25 1.25 0 0 1 1.944 0l.596.737c.284.351.736.522 1.18.447l.88-.149a1.25 1.25 0 0 1 1.444 1.05l.13.882c.066.446.368.823.79.985l.885.338a1.25 1.25 0 0 1 .601 1.85l-.517.794a1.25 1.25 0 0 0-.06 1.261l.413.79a1.25 1.25 0 0 1-.552 1.698l-.798.397c-.405.2-.669.603-.693 1.055l-.049.947a1.25 1.25 0 0 1-1.572 1.143l-.916-.247a1.25 1.25 0 0 0-1.218.333l-.623.636a1.25 1.25 0 0 1-1.786 0l-.623-.636a1.25 1.25 0 0 0-1.218-.333l-.916.247a1.25 1.25 0 0 1-1.572-1.144l-.05-.946a1.25 1.25 0 0 0-.692-1.055l-.798-.397a1.25 1.25 0 0 1-.552-1.698l.413-.79c.21-.4.186-.882-.06-1.261l-.517-.794a1.25 1.25 0 0 1 .6-1.85l.886-.338a1.25 1.25 0 0 0 .79-.985l.13-.882a1.25 1.25 0 0 1 1.445-1.05l.878.149c.445.075.897-.096 1.18-.447z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#087D6A"
                  fillRule="evenodd"
                  d="m7.542 1.06-.596.737a.63.63 0 0 1-.59.224l-.88-.149A1.875 1.875 0 0 0 3.31 3.447l-.13.881a.63.63 0 0 1-.395.493L1.9 5.16a1.875 1.875 0 0 0-.902 2.773l.518.795c.123.19.134.43.03.63l-.413.79a1.876 1.876 0 0 0 .828 2.548l.798.396c.202.1.334.303.346.528l.05.947a1.874 1.874 0 0 0 2.358 1.714l.916-.246a.62.62 0 0 1 .609.166l.623.637a1.877 1.877 0 0 0 2.68 0l.623-.637a.62.62 0 0 1 .609-.166l.916.246a1.874 1.874 0 0 0 2.359-1.714l.049-.947a.63.63 0 0 1 .346-.528l.798-.396a1.876 1.876 0 0 0 .828-2.548l-.413-.79a.63.63 0 0 1 .03-.63l.518-.795A1.875 1.875 0 0 0 16.1 5.16l-.885-.34a.63.63 0 0 1-.395-.492l-.13-.881a1.876 1.876 0 0 0-2.168-1.575l-.879.149a.63.63 0 0 1-.59-.224l-.596-.737a1.877 1.877 0 0 0-2.916 0m.972.786a.626.626 0 0 1 .972 0l.596.737a1.88 1.88 0 0 0 1.771.67l.878-.148a.626.626 0 0 1 .723.525l.13.88c.1.67.552 1.236 1.185 1.478l.885.339a.625.625 0 0 1 .3.924l-.517.795a1.88 1.88 0 0 0-.09 1.892l.413.789a.625.625 0 0 1-.276.85l-.798.396a1.88 1.88 0 0 0-1.038 1.583l-.05.947a.626.626 0 0 1-.786.57l-.916-.245a1.88 1.88 0 0 0-1.826.498l-.623.637a.627.627 0 0 1-.894 0l-.623-.637a1.88 1.88 0 0 0-1.826-.498l-.916.246a.624.624 0 0 1-.787-.571l-.049-.947a1.88 1.88 0 0 0-1.038-1.583l-.798-.397a.624.624 0 0 1-.276-.849l.412-.79c.314-.6.28-1.322-.09-1.89l-.516-.796a.625.625 0 0 1 .3-.924l.885-.34a1.87 1.87 0 0 0 1.185-1.476l.13-.881a.623.623 0 0 1 .723-.525l.878.148a1.88 1.88 0 0 0 1.771-.67zm2.584 8.424a1.251 1.251 0 0 0-.446 2.46 1.25 1.25 0 0 0 .446-2.46m-.04-4.212-5 5a.625.625 0 0 0 .884.884l5-5a.625.625 0 0 0-.884-.884m-3.71-.788a1.251 1.251 0 0 0-.446 2.46 1.25 1.25 0 0 0 .445-2.46"
                  clipRule="evenodd"
                ></path>
              </svg>
              Set Discount
            </DialogTrigger>
            <DialogContent
              onClick={(e) => e.stopPropagation()}
              onMouseLeave={(e) => e.stopPropagation()}
              className="bg-white sm:max-w-md"
            >
              <DialogHeader className="mb-5">
                <DialogTitle>Set Discount</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="col-span-2 space-y-2">
                  <Label className="block">Discount Type</Label>
                  <Input placeholder="Enter discount type" />
                </div>

                <div className="col-span-2 space-y-2">
                  <Label className="block">Discount Period</Label>
                  <Popover>
                    <PopoverTrigger asChild className="bg-white">
                      <Button
                        id="date"
                        size="lg"
                        variant="secondary"
                        className={cn(
                          "w-full justify-between text-left font-normal shadow-none has-[>svg]:px-3",
                          !date && "text-placeholder/70",
                        )}
                      >
                        {date?.from ? (
                          date.to ? (
                            <>
                              {format(date.from, "LLL dd, y")} -{" "}
                              {format(date.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(date.from, "LLL dd, y")
                          )
                        ) : (
                          <span className="text-placeholder/70">
                            Select discount period
                          </span>
                        )}
                        <CalendarDaysIcon className="text-placeholder/70 size-5" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="mr-5 w-auto p-0" align="start">
                      <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="col-span-2 space-y-2">
                  <Label className="block">Discount Amount</Label>
                  <Input placeholder="Enter discount amount" />
                </div>

                <div className="col-span-2 space-y-2">
                  <Label className="block">Discount Price</Label>
                  <Input placeholder="Enter discount price" />
                </div>
                <div className="flex items-center justify-end gap-x-3">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      size="lg"
                      variant="outline"
                      onClick={reset}
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button size="lg" type="submit">
                    Continue
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent className="p-0">
          <DataTable data={products} columns={column} />
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryTable;
