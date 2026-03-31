import { useState } from "react";
import { Calendar } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const posts = [
  {
    image: blog1,
    title: "Manutenção Preventiva: Como Aumentar a Vida Útil da Sua Empilhadeira",
    excerpt:
      "Descubra as melhores práticas de manutenção preventiva para garantir o máximo desempenho e durabilidade dos seus equipamentos de movimentação.",
    date: "15 Mar 2026",
  },
  {
    image: blog2,
    title: "Tendências em Logística e Automação de Armazéns para 2026",
    excerpt:
      "O setor logístico está em constante evolução. Conheça as principais tendências que vão transformar a operação dos armazéns nos próximos anos.",
    date: "08 Mar 2026",
  },
  {
    image: blog3,
    title: "Segurança na Operação de Empilhadeiras: Normas e Boas Práticas",
    excerpt:
      "A segurança é prioridade em qualquer operação com empilhadeiras. Saiba quais normas seguir e como implementar uma cultura de segurança.",
    date: "01 Mar 2026",
  },
];

const BlogSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-bold text-[40px] text-dark">Notícias & Blog</h2>
          <p className="text-gray-medium text-base mt-4 max-w-[640px] mx-auto leading-[1.8]">
            Fique por dentro das novidades do setor e dicas para otimizar
            sua operação logística.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <div key={i} className="rounded-[14px] overflow-hidden border border-[hsl(0,0%,91%)]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[200px] object-cover"
                loading="lazy"
                width={640}
                height={512}
              />
              <div className="bg-background p-6">
                <h3 className="font-semibold text-lg text-dark uppercase leading-[1.3] mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-medium text-sm leading-[1.7] line-clamp-4 mb-4">
                  {post.excerpt}
                </p>
                <div className="border-t border-dashed border-[hsl(0,0%,86%)] pt-3 flex items-center gap-2">
                  <Calendar size={14} className="text-[hsl(0,0%,53%)]" />
                  <span className="text-[hsl(0,0%,53%)] text-xs">{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {posts.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === active ? "bg-yellow" : "bg-[hsl(0,0%,80%)]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
