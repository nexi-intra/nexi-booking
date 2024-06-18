/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UXfgzdQfwdx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { ResponsiveBar, ResponsiveLine } from "@nivo/bar";

export default function Component(): JSX.Element {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-[#f5f5ff] p-4">
        <div className="flex items-center justify-center mb-8">
          <img src="/placeholder.svg" alt="Logo" className="h-10 w-10" />
        </div>
        <nav className="space-y-4">
          <a href="#" className="flex items-center space-x-2 text-gray-700">
            <LayoutDashboardIcon className="h-5 w-5" />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700">
            <StoreIcon className="h-5 w-5" />
            <span>Customer</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700">
            <CurrencyIcon className="h-5 w-5" />
            <span>Earnings</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700">
            <ShoppingCartIcon className="h-5 w-5" />
            <span>Product Sales</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700">
            <StoreIcon className="h-5 w-5" />
            <span>Store Management</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700">
            <SettingsIcon className="h-5 w-5" />
            <span>Settings</span>
          </a>
        </nav>
        <div className="mt-auto">
          <div className="flex items-center justify-center mb-4">
            <img src="/placeholder.svg" alt="Upgrade" className="h-24 w-24" />
          </div>
          <Button className="w-full">Upgrade Now</Button>
        </div>
      </aside>
      <main className="flex-1 p-6 bg-[#f5f5ff]">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Input type="search" placeholder="Search..." className="w-64" />
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>KW</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <section className="grid grid-cols-3 gap-6 mb-6">
          <Card className="p-4">
            <CardHeader>
              <CardTitle>Store Status</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart className="w-full aspect-[4/3]" />
            </CardContent>
          </Card>
          <Card className="p-4">
            <CardHeader>
              <CardTitle>Total Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart className="w-full aspect-[4/3]" />
            </CardContent>
          </Card>
          <Card className="p-4">
            <CardHeader>
              <CardTitle>Total Profit</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart className="w-full aspect-[4/3]" />
            </CardContent>
          </Card>
        </section>
        <section className="grid grid-cols-3 gap-6 mb-6">
          <Card className="col-span-2 p-4">
            <CardHeader>
              <CardTitle>Earnings</CardTitle>
              <CardDescription>$20,885</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart className="w-full aspect-[4/3]" />
            </CardContent>
          </Card>
          <div className="space-y-6">
            <Card className="p-4">
              <CardHeader>
                <CardTitle>Total Sales by Unit</CardTitle>
                <CardDescription>$473.58</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart className="w-full aspect-[4/3]" />
              </CardContent>
            </Card>
            <Card className="p-4">
              <CardHeader>
                <CardTitle>Members Online</CardTitle>
                <CardDescription>920</CardDescription>
              </CardHeader>
            </Card>
            <Card className="p-4">
              <CardHeader>
                <CardTitle>Server Load</CardTitle>
                <CardDescription>920</CardDescription>
              </CardHeader>
            </Card>
            <Card className="p-4">
              <CardHeader>
                <CardTitle>Today's Revenue</CardTitle>
                <CardDescription>$854</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
        <section className="grid grid-cols-2 gap-6">
          <Card className="p-4">
            <CardHeader>
              <CardTitle>Products List</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Products Name</TableHead>
                    <TableHead>Sale</TableHead>
                    <TableHead>Pricing</TableHead>
                    <TableHead>Stock Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>GZ</AvatarFallback>
                      </Avatar>
                      <div>
                        <div>Galaxy Z Fold3 5G</div>
                        <div className="text-sm text-muted-foreground">#5486726054</div>
                      </div>
                    </TableCell>
                    <TableCell>50</TableCell>
                    <TableCell>$1200.66</TableCell>
                    <TableCell className="text-green-500">Available</TableCell>
                    <TableCell>
                      <OptionIcon className="h-5 w-5" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>GZ</AvatarFallback>
                      </Avatar>
                      <div>
                        <div>Galaxy Z Fold3 5G</div>
                        <div className="text-sm text-muted-foreground">#5486726054</div>
                      </div>
                    </TableCell>
                    <TableCell>80</TableCell>
                    <TableCell>$200.00</TableCell>
                    <TableCell className="text-red-500">Unavailable</TableCell>
                    <TableCell>
                      <OptionIcon className="h-5 w-5" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>GZ</AvatarFallback>
                      </Avatar>
                      <div>
                        <div>Galaxy Z Fold3 5G</div>
                        <div className="text-sm text-muted-foreground">#5486726054</div>
                      </div>
                    </TableCell>
                    <TableCell>40</TableCell>
                    <TableCell>$600.70</TableCell>
                    <TableCell className="text-green-500">Available</TableCell>
                    <TableCell>
                      <OptionIcon className="h-5 w-5" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card className="p-4">
            <CardHeader>
              <CardTitle>User Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart className="w-full aspect-[4/3]" />
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}

interface BarChartProps extends React.HTMLAttributes<HTMLDivElement> {}

function BarChart(props: BarChartProps): JSX.Element {
  const data = [
    { country: "AD", "hot dog": 127, "hot dogColor": "hsl(74, 70%, 50%)", burger: 115, burgerColor: "hsl(355, 70%, 50%)" },
    { country: "AE", "hot dog": 60, "hot dogColor": "hsl(178, 70%, 50%)", burger: 106, burgerColor: "hsl(41, 70%, 50%)" },
    { country: "AF", "hot dog": 130, "hot dogColor": "hsl(136, 70%, 50%)", burger: 179, burgerColor: "hsl(218, 70%, 50%)" },
    { country: "AG", "hot dog": 172, "hot dogColor": "hsl(320, 70%, 50%)", burger: 109, burgerColor: "hsl(103, 70%, 50%)" },
    { country: "AI", "hot dog": 41, "hot dogColor": "hsl(258, 70%, 50%)", burger: 47, burgerColor: "hsl(175, 70%, 50%)" },
  ];

  return (
    <div {...props}>
      <ResponsiveBar
        data={data}
        keys={["hot dog", "burger"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "country",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "food",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [{ on: "hover", style: { itemOpacity: 1 } }],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(d) => `${d.id}: ${d.formattedValue} in country: ${d.indexValue}`}
      />
    </div>
  );
}

interface LineChartProps extends React.HTMLAttributes<HTMLDivElement> {}

function LineChart(props: LineChartProps): JSX.Element {
  const data = [
    {
      id: "japan",
      color: "hsl(153, 70%, 50%)",
      data: [
        { x: "plane", y: 194 },
        { x: "helicopter", y: 88 },
        { x: "boat", y: 292 },
        { x: "train", y: 281 },
        { x: "subway", y: 66 },
        { x: "bus", y: 176 },
        { x: "car", y: 12 },
        { x: "moto", y: 162 },
        { x: "bicycle", y: 240 },
        { x: "horse", y: 284 },
        { x: "skateboard", y: 232 },
        { x: "others", y: 261 },
      ],
    },
    {
      id: "france",
      color: "hsl(92, 70%, 50%)",
      data: [
        { x: "plane", y: 23 },
        { x: "helicopter", y: 73 },
        { x: "boat", y: 28 },
        { x: "train", y: 198 },
        { x: "subway", y: 96 },
        { x: "bus", y: 115 },
        { x: "car", y: 14 },
        { x: "moto", y: 202 },
        { x: "bicycle", y: 260 },
        { x: "horse", y: 298 },
        { x: "skateboard", y: 147 },
        { x: "others", y: 184 },
      ],
    },
  ];

  return (
    <div {...props}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [{ on: "hover", style: { itemBackground: "rgba(0, 0, 0, .03)", itemOpacity: 1 } }],
          },
        ]}
      />
    </div>
  );
}
