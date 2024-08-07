/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sf4qyNDO3VO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <header className="sticky top-0 z-30 flex items-center h-16 px-4 border-b bg-background sm:px-6">
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold sm:text-base"
            prefetch={false}
          >
            <CaravanIcon className="w-6 h-6" />
            <span className="sr-only">Camping Dashboard</span>
          </Link>
          <nav className="hidden gap-5 text-sm font-medium sm:flex">
            <Link href="#" className="text-primary" prefetch={false}>
              Trip Planner
            </Link>
            <Link href="#" className="text-muted-foreground" prefetch={false}>
              Packing List
            </Link>
            <Link href="#" className="text-muted-foreground" prefetch={false}>
              Budget Tracker
            </Link>
            <Link href="#" className="text-muted-foreground" prefetch={false}>
              Weather Forecast
            </Link>
            <Link href="#" className="text-muted-foreground" prefetch={false}>
              Location Tracker
            </Link>
            <Link href="#" className="text-muted-foreground" prefetch={false}>
              Family Chat
            </Link>
          </nav>
        </div>
        <div className="flex items-center ml-auto gap-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <img
              src="/placeholder.svg"
              width="32"
              height="32"
              className="rounded-full"
              alt="Avatar"
              style={{ aspectRatio: "32/32", objectFit: "cover" }}
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 grid gap-8 p-4 md:gap-12 md:p-10">
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Trip Planner
              </CardTitle>
              <CalendarIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="destination">Destination</Label>
                  <Input id="destination" placeholder="Enter destination" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="date">Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="flex-col items-start w-full h-auto"
                      >
                        <span className="font-semibold uppercase text-[0.65rem]">
                          Select Date
                        </span>
                        <span className="font-normal">April 15, 2024</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 max-w-[276px]">
                      <Calendar />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Select defaultValue="3">
                    <SelectTrigger className="w-24">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 night</SelectItem>
                      <SelectItem value="2">2 nights</SelectItem>
                      <SelectItem value="3">3 nights</SelectItem>
                      <SelectItem value="4">4 nights</SelectItem>
                      <SelectItem value="5">5 nights</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button size="lg" className="w-full h-12">
                  Plan Trip
                </Button>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Packing List
              </CardTitle>
              <CheckIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Tents</div>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost" className="h-6 w-6">
                      <MinusIcon className="w-4 h-4" />
                    </Button>
                    <span>2</span>
                    <Button size="icon" variant="ghost" className="h-6 w-6">
                      <PlusIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium">Sleeping Bags</div>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost" className="h-6 w-6">
                      <MinusIcon className="w-4 h-4" />
                    </Button>
                    <span>6</span>
                    <Button size="icon" variant="ghost" className="h-6 w-6">
                      <PlusIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium">Food</div>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost" className="h-6 w-6">
                      <MinusIcon className="w-4 h-4" />
                    </Button>
                    <span>3 days</span>
                    <Button size="icon" variant="ghost" className="h-6 w-6">
                      <PlusIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium">Clothing</div>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost" className="h-6 w-6">
                      <MinusIcon className="w-4 h-4" />
                    </Button>
                    <span>4 sets</span>
                    <Button size="icon" variant="ghost" className="h-6 w-6">
                      <PlusIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Budget Tracker
              </CardTitle>
              <DollarSignIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Accommodation</div>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      className="w-24 text-right"
                      defaultValue={200}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium">Food</div>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      className="w-24 text-right"
                      defaultValue={150}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium">Transportation</div>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      className="w-24 text-right"
                      defaultValue={100}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium">Miscellaneous</div>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      className="w-24 text-right"
                      defaultValue={50}
                    />
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="flex items-center justify-between font-medium">
                  <div>Total</div>
                  <div>$500</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Weather Forecast
              </CardTitle>
              <CloudIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Today</div>
                  <div className="flex items-center gap-2">
                    <SunIcon className="w-6 h-6" />
                    <div>
                      <div className="text-2xl font-bold">72°F</div>
                      <div className="text-sm text-muted-foreground">Sunny</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium">Tomorrow</div>
                  <div className="flex items-center gap-2">
                    <CloudIcon className="w-6 h-6" />
                    <div>
                      <div className="text-2xl font-bold">68°F</div>
                      <div className="text-sm text-muted-foreground">
                        Partly Cloudy
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium">Day 3</div>
                  <div className="flex items-center gap-2">
                    <CloudRainIcon className="w-6 h-6" />
                    <div>
                      <div className="text-2xl font-bold">64°F</div>
                      <div className="text-sm text-muted-foreground">
                        Showers
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Location Tracker
              </CardTitle>
              <MapPinIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="h-[300px] bg-muted rounded-lg">
                <div />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Family Chat</CardTitle>
              <MessageCircleIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <Avatar className="border w-10 h-10">
                    <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <div className="font-medium">John</div>
                      <div className="text-xs text-muted-foreground">
                        2:39 PM
                      </div>
                    </div>
                    <div>
                      <p>
                        Hey everyone, can't wait for the camping trip! Let's
                        make sure we have everything packed.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar className="border w-10 h-10">
                    <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <div className="font-medium">Sarah</div>
                      <div className="text-xs text-muted-foreground">
                        2:41 PM
                      </div>
                    </div>
                    <div>
                      <p>Sounds good! I'll bring the s'mores supplies.</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar className="border w-10 h-10">
                    <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <div className="font-medium">Emily</div>
                      <div className="text-xs text-muted-foreground">
                        2:43 PM
                      </div>
                    </div>
                    <div>
                      <p>
                        Great idea, Sarah! I'll bring the guitar so we can sing
                        around the campfire.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar className="border w-10 h-10">
                    <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <div className="font-medium">Michael</div>
                      <div className="text-xs text-muted-foreground">
                        2:45 PM
                      </div>
                    </div>
                    <div>
                      <p>
                        Awesome, can't wait! I'll bring the fishing gear too.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar className="border w-10 h" />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function CaravanIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="4" height="4" x="2" y="9" />
      <rect width="4" height="10" x="10" y="9" />
      <path d="M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2" />
      <circle cx="8" cy="19" r="2" />
      <path d="M10 19h12v-2" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function CloudRainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M16 14v6" />
      <path d="M8 14v6" />
      <path d="M12 16v6" />
    </svg>
  );
}

function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function MinusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function SunIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}
