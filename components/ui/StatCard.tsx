type Props = {
  title: string;
  value: string;
};

export default function StatCard({ title, value }: Props) {
  return (
    <div className="glass card-hover rounded-3xl p-6">

      <p className="text-gray-400">

        {title}

      </p>

      <h2 className="text-4xl font-bold mt-4 text-violet-400">

        {value}

      </h2>

    </div>
  );
}