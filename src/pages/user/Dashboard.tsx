import React from "react";
import { motion } from "framer-motion";
import Button from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { BarChart3, Loader2, Plus, TrendingUp, Users } from "lucide-react";
import Layout from "../../components/Layout";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../../services/auth";

const Dashboard: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["me"],
    queryFn: fetchUser,
    enabled: true,
  });

  if (isLoading) {
    return (
      <div className="fixed w-full z-50 backdrop-blur bg-black/70 flex justify-center items-center h-full left-0 bottom-0">
        <div className="w-96 h-48 bg-blue-100 rounded-lg shadow-lg flex flex-col justify-center items-center p-4">
          <Loader2 className="animate-spin w-10 h-10 text-blue-700 mb-4" />
          <p className="text-blue-600 text-lg">Loading</p>
        </div>
      </div>
    );
  }

  if (isError) {
    localStorage.removeItem("sch_token");
  }

  return (
    <Layout>
      <motion.div className="min-h-screen text-black flex">
        {/* Main Content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl text-white font-bold">
              Hello, {data?.name}
            </h1>
            <Button className="flex items-center bg-blue-800 shadow-2xl gap-2 rounded-xl px-4 py-2">
              <Plus size={18} /> Add Account
            </Button>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <Users size={32} className="text-gray-700" />
                <div>
                  <p className="text-gray-500 text-sm">Total Followers</p>
                  <p className="text-xl font-bold">38,653</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <TrendingUp size={32} className="text-gray-700" />
                <div>
                  <p className="text-gray-500 text-sm">Avg Engagement</p>
                  <p className="text-xl font-bold">8.4%</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <BarChart3 size={32} className="text-gray-700" />
                <div>
                  <p className="text-gray-500 text-sm">Weekly Reach</p>
                  <p className="text-xl font-bold">120,420</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <TrendingUp size={32} className="text-gray-700" />
                <div>
                  <p className="text-gray-500 text-sm">Top Platform</p>
                  <p className="text-xl font-bold">Instagram</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Connected Accounts */}
          <section>
            <h2 className="text-2xl text-white font-bold mb-4">
              Connected Accounts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["Facebook", "Instagram", "Twitter"].map((platform) => (
                <Card key={platform} className="rounded-2xl">
                  <CardHeader>
                    <CardTitle>{platform}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>Followers: 12,345</p>
                    <p>Engagement: 7.8%</p>
                    <p>Posts: 120</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Top Performing Content */}
          <section>
            <h2 className="text-2xl text-white font-bold mb-4">
              Top Performing Content
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="rounded-2xl">
                  <CardHeader>
                    <CardTitle>Post #{item}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-32 bg-gray-300 rounded-xl mb-2"></div>
                    <p>Likes: 1,230</p>
                    <p>Comments: 320</p>
                    <p>Engagement: 12.4%</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>
      </motion.div>
    </Layout>
  );
};

export default Dashboard;
