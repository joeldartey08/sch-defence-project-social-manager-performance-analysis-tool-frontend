import { motion } from "framer-motion";

interface Props {
  title: string;
  value: string | number;
}

export default function AnalyticsCard({ title, value }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow p-5 flex flex-col gap-2"
    >
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-semibold">{value}</p>
    </motion.div>
  );
}
