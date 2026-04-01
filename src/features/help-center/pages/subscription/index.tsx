import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";








export default function Subscriptions() {
    return (
        <>
            <div className="px-10 py-6">
                <h1 className="font-semibold text-3xl">Followings</h1>
                <div className="mt-6">
                    <Tabs defaultValue="article_comment" className="w-full">
                        <TabsList className="mb-6 w-full flex items-center bg-transparent border-b-2 justify-start">
                            <TabsTrigger value="article_comment">
                                Article Comments
                            </TabsTrigger>
                            {/* <TabsTrigger value="password">
                        </TabsTrigger> */}
                        </TabsList>
                        <TabsContent value="article_comment">
                            <div className="w-full">
                                {/* {
                                data.length > 0 ?
                                    <GridTable columns={columns} data={data} />
                                    :
                                    <><h1>Currently You have no contributions</h1></>
                            } */}

                            </div>

                        </TabsContent>
                        {/* <TabsContent value="password">Change your password here.</TabsContent> */}
                    </Tabs>
                </div>

            </div>
        </>
    )
}