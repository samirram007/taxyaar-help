import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useLocation } from "@tanstack/react-router";




export default function ActivityHeader() {
    const location = useLocation()

    const lastSegment = location.pathname.split('/').pop()
    return (
        <div className="flex px-11">
            <Tabs defaultValue={lastSegment} className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="comments">
                        <Link to="/help-center/activities/comments">Contributions</Link>
                    </TabsTrigger>
                    <TabsTrigger value="subscriptions">
                        <Link to="/help-center/activities/subscriptions">Following</Link>
                    </TabsTrigger>
                </TabsList>
                {/* <TabsContent value="account"></TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent> */}
            </Tabs>
        </div>
    )
}