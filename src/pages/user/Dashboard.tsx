import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "../../components/ui/button";
import {
  Card,
  CardContent,
} from "../../components/ui/card";
import { BarChart3, Loader2, Plus, TrendingUp, Users, X } from "lucide-react";
import Layout from "../../components/Layout";
import { useQuery } from "@tanstack/react-query";
import { fetchUser, getChannel } from "../../services/auth";
import AnalyticsChart from "../../components/AnalyticChart";
import AnalyticsCard from "../../components/AnalyticCard";
import VideoCard, { type VideoItem } from "../../components/VideoCard";

const Dashboard: React.FC = () => {
  const [socialModal, setSocialModal] = useState<boolean>(false);
  const platforms = [
    {
      name: "Facebook",
      url: "https://facebook.com",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg",
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg",
    },
    {
      name: "Twitter / X",
      url: "https://x.com",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg",
    },
    {
      name: "TikTok",
      url: "https://tiktok.com",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg",
    },
  ];

  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["me"],
    queryFn: fetchUser,
    enabled: true,
  });

  const {
    data: channelData,
    isLoading: loading,
    isError: error,
  } = useQuery({
    queryKey: ["channel"],
    queryFn: getChannel,
    enabled: true,
  });

  const channel = channelData?.channel;
  const analysis = channelData?.analysis;
  const videos = channelData?.videos;

  useEffect(() => {
    if (socialModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [socialModal]);

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

  if (loading) {
    return (
      <div className="fixed w-full z-50 backdrop-blur bg-black/70 flex justify-center items-center h-full left-0 bottom-0">
        <div className="w-96 h-48 bg-blue-100 rounded-lg shadow-lg flex flex-col justify-center items-center p-4">
          <Loader2 className="animate-spin w-10 h-10 text-blue-700 mb-4" />
          <p className="text-blue-600 text-lg">Loading</p>
        </div>
      </div>
    );
  }

  const headers = analysis?.data?.columnHeaders?.map(
    (c: { name: any }) => c.name
  );
  const values = analysis?.data?.rows?.[0];

  const analytics: Record<string, number | string> = {};
  headers?.forEach(
    (h: string | number, i: string | number) => (analytics[h] = values?.[i])
  );

  // Format data for chart
  const chartData =
    headers?.map((h: any, i: string | number) => ({
      label: h,
      value: Number(values?.[i]),
    })) || [];

  return (
    <Layout>
      {socialModal && (
        <div className="w-full h-full bg-black/60 z-50 fixed left-0 bottom-0 flex justify-center items-center">
          <div className="w-11/12 bg-white max-w-3xl rounded-2xl p-4 md:p-6">
            <div>
              <h2 className="text-xl font-semibold">Select A Platform</h2>
            </div>

            <div className="mt-4 space-y-3">
              {platforms.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center justify-between p-4 border rounded-xl hover:bg-blue-300 transition-all text-black cursor-pointer hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-3">
                    <img src={p.logo} alt={p.name} className="w-6 h-6" />
                    <span className="text-base font-medium">{p.name}</span>
                  </div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-opacity-80 transition flex items-center gap-2"
                  >
                    Connect
                  </a>
                </div>
              ))}
            </div>

            <Button
              onClick={() => setSocialModal(!socialModal)}
              className="w-24 flex items-center hover:bg-hover-300 bg-red-500 absolute top-3 right-5 mt-4 rounded-xl"
            >
              <X /> close
            </Button>
          </div>
        </div>
      )}
      <motion.div className="min-h-screen text-black flex">
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-lg md:text-2xl text-white font-bold">
              Hello, {userData?.name}
            </h1>
            <Button
              onClick={() => setSocialModal(!socialModal)}
              className="flex items-center cursor-pointer bg-blue-800 shadow-2xl gap-2 rounded-xl px-4 py-2"
            >
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
                  <p className="text-xl font-bold">
                    {channel ? channel?.data?.subscribers : "0"}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <TrendingUp size={32} className="text-gray-700" />
                <div>
                  <p className="text-gray-500 text-sm">Total Videos</p>
                  <p className="text-xl font-bold">
                    {" "}
                    {channel ? channel?.data?.totalVideos : "0"}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <BarChart3 size={32} className="text-gray-700" />
                <div>
                  <p className="text-gray-500 text-sm">Channel Title</p>
                  {channel ? channel?.data?.title : ""}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <TrendingUp size={32} className="text-gray-700" />
                <div>
                  <p className="text-gray-500 text-sm">Platform</p>
                  <p className="text-xl font-bold">
                    {" "}
                    {channel ? " youtube" : ""}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6"
          >
            <h1 className="text-2xl text-white font-bold mb-6">
              YouTube Analytics Overview
            </h1>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
              <AnalyticsCard title="Views" value={analytics?.views} />
              <AnalyticsCard
                title="Watch Time (mins)"
                value={analytics?.estimatedMinutesWatched}
              />
              <AnalyticsCard
                title="Avg View Duration (sec)"
                value={analytics?.averageViewDuration}
              />
              <AnalyticsCard
                title="Avg View % (Engagement)"
                value={analytics?.averageViewPercentage}
              />
              <AnalyticsCard title="Likes" value={analytics?.likes} />
              <AnalyticsCard title="Comments" value={analytics?.comments} />
              <AnalyticsCard title="Dislikes" value={analytics?.dislikes} />
            </div>

            {/* Chart */}
            <AnalyticsChart
              data={chartData.map((c: { label: any; value: any }) => ({
                label: c.label,
                value: c.value,
              }))}
              title="YouTube Metrics Summary"
              dataKey="value"
            />
          </motion.div>

          {/* Connected Accounts */}
          {/* <section>
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
          </section> */}

          {/* Top Performing Content */}
          <section>
            <h2 className="text-2xl text-white font-bold mb-4">
              Youtube Videos
            </h2>
            {
              videos?.data.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos?.data?.map((item: VideoItem) => (
               <VideoCard key={item.videoId} video={item} />
              ))}
            </div>: (
              <p> no videos to preview</p>
            )
            }
          </section>
        </main>
      </motion.div>
    </Layout>
  );
};

export default Dashboard;
