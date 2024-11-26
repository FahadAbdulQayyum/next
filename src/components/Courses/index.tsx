import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Popular from "./Popular"

const Courses = () => {
    return (
        <div
            className="flex flex-col justify-center items-center px-standard my-20 space-y-5"
        >
            <h1
                className="text-3xl font-bold"
            >Courses</h1>
            <p
                className="text-base"
            >Your Ultimate Guide to learning.</p>
            <span
                className="flex justify-between w-[100%]"
            >
                {/* <Tabs defaultValue="account" className="w-[400px]"> */}
                <Tabs defaultValue="account" className="w-[100%] flex flex-col justify-center items-center">
                    <TabsList>
                        <TabsTrigger value="popular">Popular</TabsTrigger>
                        <TabsTrigger value="recommended">Recommended</TabsTrigger>
                        <TabsTrigger value="bestprice">Best Price</TabsTrigger>
                    </TabsList>
                    <TabsContent value="popular">
                        <Popular />
                    </TabsContent>
                    <TabsContent value="recommended">Recommended.</TabsContent>
                    <TabsContent value="bestprice">Best Price.</TabsContent>
                </Tabs>

            </span>
        </div>
    )
}

export default Courses
