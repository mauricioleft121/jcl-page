// Diesel
import diesel3_1 from "@/assets/diesel/3ton/20.png";
import diesel3_2 from "@/assets/diesel/3ton/21.png";
import diesel3_3 from "@/assets/diesel/3ton/22.png";
import diesel3_4 from "@/assets/diesel/3ton/23.png";

import diesel4_1 from "@/assets/diesel/4ton/25.png";
import diesel4_2 from "@/assets/diesel/4ton/26.png";
import diesel4_3 from "@/assets/diesel/4ton/27.png";
import diesel4_4 from "@/assets/diesel/4ton/28.png";

import diesel5_1 from "@/assets/diesel/5ton/25.png";
import diesel5_2 from "@/assets/diesel/5ton/26.png";
import diesel5_3 from "@/assets/diesel/5ton/27.png";
import diesel5_4 from "@/assets/diesel/5ton/28.png";

import diesel7_1 from "@/assets/diesel/7ton/30.png";
import diesel7_2 from "@/assets/diesel/7ton/31.png";
import diesel7_3 from "@/assets/diesel/7ton/32.png";
import diesel7_4 from "@/assets/diesel/7ton/33.png";

// Elétricas
import eletrica3_main from "@/assets/eletricas/3ton/3ton-main.png";
import eletrica3_2 from "@/assets/eletricas/3ton/2.png";
import eletrica3_3 from "@/assets/eletricas/3ton/3.png";
import eletrica3_4 from "@/assets/eletricas/3ton/4.png";

import eletrica4_1 from "@/assets/eletricas/4ton/12.png";
import eletrica4_2 from "@/assets/eletricas/4ton/edit-1776447736369.png";
import eletrica4_3 from "@/assets/eletricas/4ton/edit-1776447784009.png";
import eletrica4_4 from "@/assets/eletricas/4ton/edit-1776447861374.png";

import eletrica5_main from "@/assets/eletricas/5ton/5ton-main.png";
import eletrica5_2 from "@/assets/eletricas/5ton/17.png";
import eletrica5_3 from "@/assets/eletricas/5ton/18.png";
import eletrica5_4 from "@/assets/eletricas/5ton/19.png";

import eletrica7_1 from "@/assets/eletricas/7ton/26.png";
import eletrica7_2 from "@/assets/eletricas/7ton/edit-1776447604943.png";
import eletrica7_3 from "@/assets/eletricas/7ton/edit-1776447652669.png";

// Categorias elétricas (linha de equipamentos — imagens reais)
import patoladaImg from "@/assets/EQUIPAMENTO ELÉTRICO/Empilhadeira patolada/1.png";
import retratilImg from "@/assets/EQUIPAMENTO ELÉTRICO/Empilhadeira retrátil/1.png";
import transpaleteiraImg from "@/assets/EQUIPAMENTO ELÉTRICO/Transpaleteiro/1.png";
import paleteiraImg from "@/assets/EQUIPAMENTO ELÉTRICO/Paleteiro elétrico/1.png";

export interface Product {
  slug: string;
  /** Código curto do modelo, exibido em cards e títulos (ex.: JCLFD30) */
  code: string;
  name: string;
  category: "Empilhadeiras Elétricas" | "Empilhadeiras a Combustão";
  categoryColor: string;
  image: string;
  images: string[];
  shortDescription: string;
  description: string[];
  specs: Record<string, string>;
  availability: "Disponível" | "Sob Consulta" | "Pronta Entrega";
  applications: string[];
  model?: string;
  tags?: string[];
  aboutProduct?: string;
}

const ELETRICA_COLOR = "hsl(142, 60%, 40%)";
const DIESEL_COLOR = "hsl(25, 90%, 50%)";

export const products: Product[] = [
  // ============ ELÉTRICAS ============
  {
    slug: "jclb30",
    code: "JCLB30",
    name: "JCLB30 — Empilhadeira Contrabalançada Elétrica JCL(B) B30",
    category: "Empilhadeiras Elétricas",
    categoryColor: ELETRICA_COLOR,
    image: eletrica3_main,
    images: [eletrica3_main, eletrica3_2, eletrica3_3, eletrica3_4],
    shortDescription: "Empilhadeira elétrica JCLB30 com bateria de íons de lítio, capacidade de 3 toneladas, zero emissão e alto desempenho para operações logísticas e industriais.",
    description: [
      "A JCLB30 é uma empilhadeira elétrica equipada com bateria de íons de lítio de última geração, desenvolvida pela JCL Empilhadeiras para proporcionar alto desempenho, maior eficiência e redução dos custos operacionais.",
      "Com emissão zero de poluentes, é a solução ideal para operações logísticas, industriais e ambientes de armazenagem intensiva.",
      "Sua combinação entre potência, tecnologia avançada e sistemas inteligentes de segurança garante produtividade, confiabilidade e excelente desempenho nas operações do dia a dia."
    ],
    model: "JCLB30",
    tags: ["JCLB", "empilhadeira contrabalançada", "empilhadeira contrabalançada elétrica"],
    aboutProduct: "A JCLB30 une potência, tecnologia e eficiência em uma empilhadeira elétrica de alto desempenho. Equipada com bateria de íons de lítio, oferece menor custo operacional, emissão zero de poluentes e excelente desempenho para operações logísticas, industriais e de armazenagem. Uma solução moderna para mais produtividade e segurança no dia a dia.",
    specs: {
      "Capacidade de Carga": "3.000 kg",
      "Altura Máxima de Elevação": "4.500 mm",
      "Centro de Carga": "500 mm",
      "Largura Total": "1.230 mm",
      "Peso do Equipamento": "4.650 kg",
      "Tipo de Motor": "Elétrico AC",
      "Tensão / Bateria": "80V",
      "Velocidade de Deslocamento": "18 km/h"
    },
    availability: "Pronta Entrega",
    applications: ["Armazéns internos", "Centros de distribuição", "Indústria alimentícia", "Câmaras frias", "Farmacêutica", "E-commerce"]
  },
  {
    slug: "jclb40",
    code: "JCLB40",
    name: "JCLB40 — Empilhadeira Contrabalançada Elétrica JCL(B) B40",
    category: "Empilhadeiras Elétricas",
    categoryColor: ELETRICA_COLOR,
    image: eletrica4_1,
    images: [eletrica4_1, eletrica4_2, eletrica4_3, eletrica4_4],
    shortDescription: "Empilhadeira elétrica JCLB40 com bateria de íons de lítio, capacidade de 4 toneladas, alta eficiência e zero emissão para operações industriais e de armazenagem.",
    description: [
      "A JCLB40 é uma empilhadeira elétrica equipada com bateria de íons de lítio de última geração, desenvolvida pela JCL Empilhadeiras para proporcionar alto desempenho, maior eficiência e redução dos custos operacionais.",
      "Com emissão zero de poluentes, é a solução ideal para operações logísticas, industriais e ambientes de armazenagem intensiva.",
      "Sua combinação entre potência, tecnologia avançada e sistemas inteligentes de segurança garante produtividade, confiabilidade e excelente desempenho nas operações do dia a dia."
    ],
    model: "JCLB40",
    tags: ["JCLB", "empilhadeira contrabalançada", "empilhadeira contrabalançada elétrica"],
    aboutProduct: "A JCLB40 une potência, tecnologia e eficiência em uma empilhadeira elétrica de alto desempenho. Equipada com bateria de íons de lítio, oferece menor custo operacional, emissão zero de poluentes e excelente desempenho para operações logísticas, industriais e de armazenagem. Uma solução moderna para mais produtividade e segurança no dia a dia.",
    specs: {
      "Capacidade de Carga": "4.000 kg",
      "Altura Máxima de Elevação": "5.000 mm",
      "Centro de Carga": "500 mm",
      "Largura Total": "1.300 mm",
      "Peso do Equipamento": "5.800 kg",
      "Tipo de Motor": "Elétrico AC Dual",
      "Tensão / Bateria": "80V",
      "Velocidade de Deslocamento": "20 km/h"
    },
    availability: "Pronta Entrega",
    applications: ["Indústria automotiva", "Centros de distribuição", "Logística pesada", "Metalúrgica leve", "Operações multi-turno"]
  },
  {
    slug: "jclb50",
    code: "JCLB50",
    name: "JCLB50 — Empilhadeira Contrabalançada Elétrica JCL(B) B50",
    category: "Empilhadeiras Elétricas",
    categoryColor: ELETRICA_COLOR,
    image: eletrica5_main,
    images: [eletrica5_main, eletrica5_2, eletrica5_3, eletrica5_4],
    shortDescription: "Empilhadeira elétrica JCLB50 de 5 toneladas com bateria de íons de lítio, robustez industrial e zero emissão de poluentes.",
    description: [
      "A JCLB50 é uma empilhadeira elétrica de 5 toneladas desenvolvida para atender operações mais exigentes com máxima potência e resistência.",
      "Equipada com bateria de íons de lítio de última geração, entrega alta performance, maior autonomia e redução dos custos operacionais.",
      "Com estrutura robusta, emissão zero de poluentes e tecnologia avançada, oferece mais produtividade, segurança e eficiência para operações industriais, logísticas e de armazenagem."
    ],
    model: "JCLB50",
    tags: ["JCLB", "empilhadeira contrabalançada", "empilhadeira contrabalançada elétrica"],
    aboutProduct: "A JCLB50 foi desenvolvida para operações que exigem mais potência e capacidade de carga. Com capacidade de 5 toneladas e estrutura mais robusta, oferece alto desempenho e resistência para aplicações mais intensas. Equipada com bateria de íons de lítio, proporciona menor custo operacional, emissão zero de poluentes e mais eficiência para operações logísticas, industriais e de armazenagem. Uma solução que une força, tecnologia e segurança para elevar a produtividade do dia a dia.",
    specs: {
      "Capacidade de Carga": "5.000 kg",
      "Altura Máxima de Elevação": "5.500 mm",
      "Centro de Carga": "500 mm",
      "Largura Total": "1.380 mm",
      "Peso do Equipamento": "7.200 kg",
      "Tipo de Motor": "Elétrico AC",
      "Tensão / Bateria": "80V",
      "Velocidade de Deslocamento": "20 km/h"
    },
    availability: "Disponível",
    applications: ["Indústria de bebidas", "Papel e celulose", "Logística de grande porte", "Indústria pesada interna", "Operações 24/7"]
  },
  {
    slug: "jclb70",
    code: "JCLB70",
    name: "JCLB70 — Empilhadeira Contrabalançada Elétrica JCL(B) B70",
    category: "Empilhadeiras Elétricas",
    categoryColor: ELETRICA_COLOR,
    image: eletrica7_1,
    images: [eletrica7_1, eletrica7_2, eletrica7_3],
    shortDescription: "Empilhadeira elétrica JCLB70 de 7 toneladas com bateria de íons de lítio, máxima potência da linha elétrica e zero emissão.",
    description: [
      "A JCLB70 é uma empilhadeira elétrica de 7 toneladas desenvolvida para atender operações mais exigentes com máxima potência e resistência.",
      "Equipada com bateria de íons de lítio de última geração, entrega alta performance, maior autonomia e redução dos custos operacionais.",
      "Com estrutura robusta, emissão zero de poluentes e tecnologia avançada, oferece mais produtividade, segurança e eficiência para operações industriais, logísticas e de armazenagem."
    ],
    model: "JCLB70",
    tags: ["JCLB", "empilhadeira contrabalançada", "empilhadeira contrabalançada elétrica"],
    aboutProduct: "A JCLB70 foi desenvolvida para operações que exigem mais potência e capacidade de carga. Com capacidade de 7 toneladas e estrutura mais robusta, oferece alto desempenho e resistência para aplicações mais intensas. Equipada com bateria de íons de lítio, proporciona menor custo operacional, emissão zero de poluentes e mais eficiência para operações logísticas, industriais e de armazenagem. Uma solução que une força, tecnologia e segurança para elevar a produtividade do dia a dia.",
    specs: {
      "Capacidade de Carga": "7.000 kg",
      "Altura Máxima de Elevação": "5.000 mm",
      "Centro de Carga": "600 mm",
      "Largura Total": "1.580 mm",
      "Peso do Equipamento": "10.500 kg",
      "Tipo de Motor": "Elétrico AC Alta Tensão",
      "Tensão / Bateria": "96V",
      "Velocidade de Deslocamento": "22 km/h"
    },
    availability: "Sob Consulta",
    applications: ["Siderúrgica interna", "Indústria do aço", "Fundições", "Operações portuárias internas", "Containers"]
  },

  // ============ DIESEL ============
  {
    slug: "jcld30",
    code: "JCLFD30",
    name: "JCLD30 — Empilhadeira a diesel JCL(D) D30",
    category: "Empilhadeiras a Combustão",
    categoryColor: DIESEL_COLOR,
    image: diesel3_1,
    images: [diesel3_1, diesel3_2, diesel3_3, diesel3_4],
    shortDescription: "Empilhadeira a diesel JCLD30 com capacidade de até 3.000 kg, robusta e confiável para operações internas e externas de alta demanda.",
    description: [
      "A JCLD30 é uma empilhadeira a diesel com capacidade de carga de até 3.000 kg, desenvolvida para oferecer alto desempenho em operações internas e externas.",
      "Sua estrutura robusta garante resistência e confiabilidade mesmo em ambientes de trabalho exigentes, enquanto o design ergonômico proporciona maior conforto e segurança ao operador.",
      "Além disso, conta com fácil acesso aos componentes de manutenção, reduzindo o tempo de parada e aumentando a produtividade. Uma solução eficiente, durável e ideal para aplicações de alta demanda."
    ],
    model: "JCLD",
    tags: ["JCLD", "empilhadeira a combustão", "empilhadeira a diesel"],
    aboutProduct: "Conheça a Empilhadeira a Combustão a diesel JCLD30, desenvolvida para oferecer robustez, desempenho e alta eficiência em operações industriais e logísticas. Ideal para ambientes internos e externos e aplicações que exigem resistência e produtividade, o equipamento proporciona operação segura, estabilidade e excelente desempenho no transporte e movimentação de cargas. Disponível em diferentes capacidades, adapta-se às necessidades de diversos setores, garantindo potência e confiabilidade para o dia a dia operacional.",
    specs: {
      "Capacidade de Carga": "3.000 kg",
      "Altura Máxima de Elevação": "4.500 mm",
      "Centro de Carga": "500 mm",
      "Largura Total": "1.225 mm",
      "Peso do Equipamento": "4.300 kg",
      "Tipo de Motor": "Diesel 4 cilindros",
      "Capacidade do Tanque": "60 litros",
      "Velocidade de Deslocamento": "22 km/h"
    },
    availability: "Pronta Entrega",
    applications: ["Pátios externos", "Construção civil", "Depósitos de materiais", "Metalúrgica", "Operações mistas"]
  },
  {
    slug: "jcld40",
    code: "JCLFD40",
    name: "JCLD40 — Empilhadeira a diesel JCL(D) D40",
    category: "Empilhadeiras a Combustão",
    categoryColor: DIESEL_COLOR,
    image: diesel4_1,
    images: [diesel4_1, diesel4_2, diesel4_3, diesel4_4],
    shortDescription: "Empilhadeira a diesel JCLD40 com capacidade de até 4.000 kg, alto desempenho e conforto para operações internas e externas exigentes.",
    description: [
      "A JCLD40 é uma empilhadeira a diesel com capacidade de carga de até 4.000 kg, desenvolvida para proporcionar alto desempenho em operações internas e externas.",
      "Sua estrutura reforçada oferece resistência e confiabilidade para ambientes de trabalho exigentes, enquanto os comandos ergonômicos garantem maior conforto e produtividade ao operador.",
      "Além disso, o fácil acesso aos componentes de manutenção reduz o tempo de parada, tornando a operação mais eficiente e rentável."
    ],
    model: "JCLD",
    tags: ["JCLD", "empilhadeira a combustão", "empilhadeira a diesel"],
    aboutProduct: "Conheça a Empilhadeira a Combustão a diesel JCLD40, desenvolvida para oferecer robustez, desempenho e alta eficiência em operações industriais e logísticas. Ideal para ambientes internos e externos e aplicações que exigem resistência e produtividade, o equipamento proporciona operação segura, estabilidade e excelente desempenho no transporte e movimentação de cargas. Disponível em diferentes capacidades, adapta-se às necessidades de diversos setores, garantindo potência e confiabilidade para o dia a dia operacional.",
    specs: {
      "Capacidade de Carga": "4.000 kg",
      "Altura Máxima de Elevação": "5.000 mm",
      "Centro de Carga": "500 mm",
      "Largura Total": "1.300 mm",
      "Peso do Equipamento": "5.400 kg",
      "Tipo de Motor": "Diesel Turbo 4 cilindros",
      "Capacidade do Tanque": "70 litros",
      "Velocidade de Deslocamento": "24 km/h"
    },
    availability: "Pronta Entrega",
    applications: ["Indústria de transformação", "Centros de distribuição", "Carga e descarga", "Operações externas", "Logística pesada"]
  },
  {
    slug: "jcld50",
    code: "JCLFD50",
    name: "JCLD50 — Empilhadeira a diesel JCL(D) D50",
    category: "Empilhadeiras a Combustão",
    categoryColor: DIESEL_COLOR,
    image: diesel5_1,
    images: [diesel5_1, diesel5_2, diesel5_3, diesel5_4],
    shortDescription: "Empilhadeira a diesel JCLD50 com capacidade de até 5.000 kg, robusta e confiável para aplicações de alta demanda.",
    description: [
      "A JCLD50 é uma empilhadeira a diesel com capacidade de carga de até 5.000 kg, desenvolvida para oferecer alto desempenho em operações internas e externas.",
      "Sua estrutura reforçada garante resistência e confiabilidade em ambientes de trabalho exigentes, enquanto os comandos ergonômicos proporcionam maior conforto e segurança ao operador.",
      "Além disso, o fácil acesso aos componentes de manutenção contribui para a redução do tempo de parada e o aumento da produtividade. Uma solução robusta, eficiente e confiável para aplicações de alta demanda."
    ],
    model: "JCLD",
    tags: ["JCLD", "empilhadeira a combustão", "empilhadeira a diesel"],
    aboutProduct: "Conheça a Empilhadeira a Combustão a diesel JCLD50, desenvolvida para oferecer robustez, desempenho e alta eficiência em operações industriais e logísticas. Ideal para ambientes internos e externos e aplicações que exigem resistência e produtividade, o equipamento proporciona operação segura, estabilidade e excelente desempenho no transporte e movimentação de cargas. Disponível em diferentes capacidades, adapta-se às necessidades de diversos setores, garantindo potência e confiabilidade para o dia a dia operacional.",
    specs: {
      "Capacidade de Carga": "5.000 kg",
      "Altura Máxima de Elevação": "5.500 mm",
      "Centro de Carga": "500 mm",
      "Largura Total": "1.380 mm",
      "Peso do Equipamento": "6.800 kg",
      "Tipo de Motor": "Diesel Turbo Intercooler",
      "Capacidade do Tanque": "85 litros",
      "Velocidade de Deslocamento": "25 km/h"
    },
    availability: "Disponível",
    applications: ["Pátios industriais", "Estaleiros", "Indústria de bebidas", "Operações portuárias", "Indústria pesada"]
  },
  {
    slug: "jcld70",
    code: "JCLFD70",
    name: "JCLD70 — Empilhadeira a diesel JCL(D) D70",
    category: "Empilhadeiras a Combustão",
    categoryColor: DIESEL_COLOR,
    image: diesel7_1,
    images: [diesel7_1, diesel7_2, diesel7_3, diesel7_4],
    shortDescription: "Empilhadeira a diesel JCLD70 com capacidade de até 7.000 kg, máxima potência e confiabilidade para movimentação de cargas pesadas.",
    description: [
      "A JCLD70 é uma empilhadeira a diesel com capacidade de carga de até 7.000 kg, desenvolvida para atender operações de alta demanda com máxima eficiência e confiabilidade.",
      "Sua estrutura reforçada proporciona excelente desempenho em ambientes internos e externos, mesmo nas aplicações mais exigentes.",
      "Conta com comandos ergonômicos que garantem maior conforto ao operador e acesso facilitado aos componentes de manutenção, reduzindo o tempo de parada e aumentando a produtividade. Uma solução robusta, segura e durável para a movimentação de cargas pesadas."
    ],
    model: "JCLD",
    tags: ["JCLD", "empilhadeira a combustão", "empilhadeira a diesel"],
    aboutProduct: "Conheça a Empilhadeira a Combustão a diesel JCLD70, desenvolvida para oferecer robustez, desempenho e alta eficiência em operações industriais e logísticas. Ideal para ambientes internos e externos e aplicações que exigem resistência e produtividade, o equipamento proporciona operação segura, estabilidade e excelente desempenho no transporte e movimentação de cargas. Disponível em diferentes capacidades, adapta-se às necessidades de diversos setores, garantindo potência e confiabilidade para o dia a dia operacional.",
    specs: {
      "Capacidade de Carga": "7.000 kg",
      "Altura Máxima de Elevação": "6.000 mm",
      "Centro de Carga": "600 mm",
      "Largura Total": "1.580 mm",
      "Peso do Equipamento": "9.800 kg",
      "Tipo de Motor": "Diesel Turbo Alta Cilindrada",
      "Capacidade do Tanque": "120 litros",
      "Velocidade de Deslocamento": "26 km/h"
    },
    availability: "Sob Consulta",
    applications: ["Portos secos", "Mineração", "Siderúrgica", "Construção pesada", "Movimentação de containers", "Indústria madeireira"]
  }
];

export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);

export const getRelatedProducts = (slug: string, limit = 3) => {
  const product = getProductBySlug(slug);
  if (!product) return products.slice(0, limit);
  const sameCategory = products.filter(p => p.slug !== slug && p.category === product.category);
  return sameCategory.length > 0
    ? sameCategory.slice(0, limit)
    : products.filter(p => p.slug !== slug).slice(0, limit);
};

export const categories = ["Empilhadeiras Elétricas", "Empilhadeiras a Combustão"] as const;

/** Metadata for the 6 equipment categories shown on /produtos */
export interface CategoryMeta {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  /** Maps to `Product.category` when products exist */
  productCategory?: "Empilhadeiras Elétricas" | "Empilhadeiras a Combustão";
  image: string;
  comingSoon?: boolean;
}

export const categoriesMeta: CategoryMeta[] = [
  {
    slug: "empilhadeira-diesel",
    name: "Empilhadeira à Diesel",
    shortName: "Diesel",
    description: "As empilhadeiras à diesel são ideais para operações intensas e ambientes externos. Robustez, potência e máxima eficiência para o seu negócio.",
    productCategory: "Empilhadeiras a Combustão",
    image: diesel4_1,
  },
  {
    slug: "empilhadeira-eletrica",
    name: "Empilhadeira Elétrica",
    shortName: "Elétrica",
    description: "Ideal para operações internas em áreas fechadas. Silenciosa, econômica e eficiente, com alto desempenho e sustentabilidade.",
    productCategory: "Empilhadeiras Elétricas",
    image: eletrica4_1,
  },
  {
    slug: "empilhadeira-patolada",
    name: "Empilhadeira Patolada",
    shortName: "Patolada",
    description: "Elétrica, compacta e versátil — segurança, estabilidade e eficiência para movimentação e elevação de cargas em armazéns, CDs e linhas de produção.",
    image: patoladaImg,
    comingSoon: true,
  },
  {
    slug: "empilhadeira-retratil",
    name: "Empilhadeira Retrátil",
    shortName: "Retrátil",
    description: "Elétrica com bateria de lítio para operações intensas de armazenagem em grandes alturas. Potência, autonomia e segurança em design moderno.",
    image: retratilImg,
    comingSoon: true,
  },
  {
    slug: "transpaleteira-eletrica",
    name: "Transpaleteira Elétrica",
    shortName: "Transpaleteira",
    description: "Transpaleteira elétrica robusta JCL — potência, baixo ruído e manutenção reduzida para movimentações de médio e alto volume.",
    image: transpaleteiraImg,
    comingSoon: true,
  },
  {
    slug: "paleteira-eletrica",
    name: "Paleteira Elétrica",
    shortName: "Paleteira",
    description: "Paleteira elétrica compacta JCL — praticidade, resistência e ótimo desempenho para supermercados, armazéns, indústrias e centros de distribuição.",
    image: paleteiraImg,
    comingSoon: true,
  },
];

export const getCategoryBySlug = (slug: string) =>
  categoriesMeta.find(c => c.slug === slug);

export const getProductsByCategorySlug = (slug: string): Product[] => {
  const meta = getCategoryBySlug(slug);
  if (!meta || !meta.productCategory) return [];
  return products.filter(p => p.category === meta.productCategory);
};
