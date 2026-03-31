const stats = [
  { value: "500+", label: "Empilhadeiras Vendidas" },
  { value: "15", label: "Anos de Experiência" },
  { value: "98%", label: "Clientes Satisfeitos" },
];

const StatsStrip = () => {
  return (
    <section className="h-[110px] bg-dark flex items-center">
      <div className="container grid grid-cols-3 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-yellow font-bold text-[28px]">{stat.value}</p>
            <p className="text-yellow/80 font-medium text-[13px]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsStrip;
