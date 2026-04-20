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

export interface Product {
  slug: string;
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
}

const ELETRICA_COLOR = "hsl(142, 60%, 40%)";
const DIESEL_COLOR = "hsl(25, 90%, 50%)";

export const products: Product[] = [
  // ============ ELÉTRICAS ============
  {
    slug: "jcl-eletrica-3ton",
    name: "JCL Elétrica 3 Toneladas",
    category: "Empilhadeiras Elétricas",
    categoryColor: ELETRICA_COLOR,
    image: eletrica3_main,
    images: [eletrica3_main, eletrica3_2, eletrica3_3, eletrica3_4],
    shortDescription: "Empilhadeira elétrica JCL com capacidade de 3.000 kg, zero emissão e operação silenciosa para ambientes internos exigentes.",
    description: [
      "A Empilhadeira Elétrica JCL de 3 Toneladas combina robustez e sustentabilidade em um equipamento projetado para operações intensivas em armazéns, centros de distribuição e indústrias que exigem zero emissão de gases. Movida a bateria, é a solução ideal para ambientes internos, câmaras frias e operações próximas a alimentos e produtos farmacêuticos.",
      "Equipada com motor elétrico AC de alto rendimento, oferece torque constante, aceleração suave e frenagem regenerativa que prolonga a autonomia da bateria. O sistema de gerenciamento eletrônico monitora consumo, temperatura e desempenho em tempo real, garantindo máxima eficiência operacional.",
      "Com mastro duplex de série e opção triplex, cabine ergonômica e excelente visibilidade em 360°, a empilhadeira elétrica JCL 3T proporciona conforto ao operador e produtividade superior em jornadas de até 8 horas contínuas."
    ],
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
    slug: "jcl-eletrica-4ton",
    name: "JCL Elétrica 4 Toneladas",
    category: "Empilhadeiras Elétricas",
    categoryColor: ELETRICA_COLOR,
    image: eletrica4_1,
    images: [eletrica4_1, eletrica4_2, eletrica4_3, eletrica4_4],
    shortDescription: "Empilhadeira elétrica JCL de 4.000 kg, alta autonomia e desempenho para movimentação de cargas pesadas em ambientes internos.",
    description: [
      "A Empilhadeira Elétrica JCL 4 Toneladas é a escolha certa para operações de média a alta intensidade que exigem capacidade elevada sem abrir mão dos benefícios da tração elétrica. Indicada para indústrias automotivas, metalúrgicas leves e centros logísticos que operam em múltiplos turnos.",
      "Seu sistema dual-motor proporciona tração e elevação simultâneas com máxima eficiência, enquanto a tecnologia de gerenciamento inteligente de energia adapta o consumo conforme o perfil de uso. A bateria de alta capacidade permite jornadas extensas com recarga rápida.",
      "Com chassi reforçado, contrapeso otimizado e sistema avançado de estabilidade eletrônica, a JCL Elétrica 4T entrega performance equivalente a uma empilhadeira a combustão, mas com custo operacional até 60% menor e zero emissão de poluentes."
    ],
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
    slug: "jcl-eletrica-5ton",
    name: "JCL Elétrica 5 Toneladas",
    category: "Empilhadeiras Elétricas",
    categoryColor: ELETRICA_COLOR,
    image: eletrica5_main,
    images: [eletrica5_main, eletrica5_2, eletrica5_3, eletrica5_4],
    shortDescription: "Empilhadeira elétrica JCL de 5.000 kg, robustez industrial com a eficiência energética da tração elétrica.",
    description: [
      "A Empilhadeira Elétrica JCL 5 Toneladas é projetada para operações industriais pesadas que demandam alta capacidade de carga em ambientes onde a emissão de gases não é permitida. É a solução ideal para indústrias de bebidas, papel e celulose, e centros logísticos de grande porte.",
      "Equipada com motor elétrico AC de alto torque e bateria industrial de longa duração, oferece desempenho consistente mesmo em rampas e superfícies irregulares. O sistema de recuperação de energia na frenagem aumenta significativamente a autonomia operacional.",
      "Conta com cabine espaçosa, ar condicionado opcional, controles ergonômicos e múltiplos sensores de segurança. O painel digital completo fornece informações em tempo real sobre carga da bateria, horas de operação, alertas de manutenção e diagnósticos do equipamento."
    ],
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
    slug: "jcl-eletrica-7ton",
    name: "JCL Elétrica 7 Toneladas",
    category: "Empilhadeiras Elétricas",
    categoryColor: ELETRICA_COLOR,
    image: eletrica7_1,
    images: [eletrica7_1, eletrica7_2, eletrica7_3],
    shortDescription: "Empilhadeira elétrica JCL de 7.000 kg, máxima capacidade da linha elétrica, desenvolvida para cargas extremas com zero emissão.",
    description: [
      "A Empilhadeira Elétrica JCL 7 Toneladas representa o ápice da engenharia elétrica da JCL. Desenvolvida para movimentar cargas extremas em ambientes industriais que exigem zero emissão, é uma alternativa moderna às tradicionais empilhadeiras a diesel de mesma capacidade.",
      "Seu poderoso sistema elétrico de alta tensão entrega torque excepcional para elevação rápida de cargas pesadas e deslocamento ágil mesmo em rampas. A bateria industrial reforçada garante jornadas completas de trabalho sem perda de desempenho.",
      "Com chassi superdimensionado, eixo motriz reforçado e pneus maciços de alta resistência, a JCL Elétrica 7T é indicada para siderúrgicas internas, indústria de aço, fundições e operações portuárias internas onde o controle de emissões é crítico."
    ],
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
    slug: "jcl-diesel-3ton",
    name: "JCL Diesel 3 Toneladas",
    category: "Empilhadeiras a Combustão",
    categoryColor: DIESEL_COLOR,
    image: diesel3_1,
    images: [diesel3_1, diesel3_2, diesel3_3, diesel3_4],
    shortDescription: "Empilhadeira diesel JCL de 3.000 kg, robustez e versatilidade para operações em pátios e ambientes externos.",
    description: [
      "A Empilhadeira Diesel JCL 3 Toneladas é a porta de entrada da linha a combustão JCL, oferecendo o equilíbrio perfeito entre potência e economia. Projetada para operações em pátios, depósitos abertos e indústrias que demandam mobilidade entre ambientes internos e externos.",
      "Movida por motor diesel de 4 cilindros com baixo consumo e alto torque, atende às normas de emissão vigentes e oferece intervalos estendidos de manutenção. O sistema de transmissão automática garante mudanças suaves e produtividade superior.",
      "Com chassi robusto, pneus pneumáticos de alta resistência e cabine ergonômica com excelente visibilidade, a JCL Diesel 3T é a escolha certa para construção civil, depósitos de materiais, indústrias metalúrgicas e operações logísticas externas."
    ],
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
    slug: "jcl-diesel-4ton",
    name: "JCL Diesel 4 Toneladas",
    category: "Empilhadeiras a Combustão",
    categoryColor: DIESEL_COLOR,
    image: diesel4_1,
    images: [diesel4_1, diesel4_2, diesel4_3, diesel4_4],
    shortDescription: "Empilhadeira diesel JCL de 4.000 kg, alta produtividade para operações industriais e logísticas pesadas.",
    description: [
      "A Empilhadeira Diesel JCL 4 Toneladas combina potência e durabilidade em um equipamento desenvolvido para operações industriais que exigem movimentação contínua de cargas pesadas. Indicada para indústrias de transformação, distribuidoras e operações de carga e descarga.",
      "Seu motor diesel turbo de última geração entrega torque elevado em baixas rotações, otimizando o consumo de combustível e prolongando a vida útil do equipamento. A transmissão powershift permite inversões de marcha sem perda de velocidade, elevando a produtividade.",
      "A JCL Diesel 4T conta com sistemas avançados de segurança, incluindo controle de velocidade em curvas, limitador eletrônico de carga, cinto de segurança retrátil e câmera de ré opcional. O sistema de diagnóstico OBD facilita manutenções preventivas e preditivas."
    ],
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
    slug: "jcl-diesel-5ton",
    name: "JCL Diesel 5 Toneladas",
    category: "Empilhadeiras a Combustão",
    categoryColor: DIESEL_COLOR,
    image: diesel5_1,
    images: [diesel5_1, diesel5_2, diesel5_3, diesel5_4],
    shortDescription: "Empilhadeira diesel JCL de 5.000 kg, alto desempenho para cargas pesadas em pátios industriais e estaleiros.",
    description: [
      "A Empilhadeira Diesel JCL 5 Toneladas é desenvolvida para operações exigentes que demandam capacidade elevada e desempenho consistente. Ideal para pátios industriais, estaleiros, indústrias de bebidas em paletes pesados e operações portuárias.",
      "Equipada com motor diesel turbo intercooler, oferece potência superior em qualquer condição operacional, mantendo eficiência energética e baixo nível de emissões. O sistema hidráulico de alta vazão proporciona elevação rápida mesmo com carga máxima.",
      "Possui chassi reforçado, contrapeso fundido em peça única, mastro de alta resistência e proteção integral do operador. Os pneus pneumáticos ou maciços (opcionais) garantem aderência e durabilidade em qualquer terreno, inclusive em condições adversas."
    ],
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
    slug: "jcl-diesel-7ton",
    name: "JCL Diesel 7 Toneladas",
    category: "Empilhadeiras a Combustão",
    categoryColor: DIESEL_COLOR,
    image: diesel7_1,
    images: [diesel7_1, diesel7_2, diesel7_3, diesel7_4],
    shortDescription: "Empilhadeira diesel JCL de 7.000 kg, máxima potência para movimentação de containers, bobinas e cargas extremas.",
    description: [
      "A Empilhadeira Diesel JCL 7 Toneladas é a mais robusta da linha JCL, projetada para enfrentar as operações mais severas da indústria pesada. Indicada para movimentação de containers, bobinas de aço, blocos de pedra, madeira em toras e qualquer aplicação que exija máxima capacidade de carga.",
      "Seu poderoso motor diesel turbo de alta cilindrada entrega torque excepcional, mesmo nas condições mais adversas. O tanque ampliado garante autonomia para jornadas completas, e o sistema de arrefecimento reforçado mantém a temperatura ideal mesmo em climas tropicais e operações intensivas.",
      "Construída com chassi superdimensionado, eixos reforçados, transmissão de alta resistência e proteção integral contra impactos, a JCL Diesel 7T é a escolha definitiva para portos secos, mineração, siderurgia e construção pesada. Personalizações sob demanda como garfos especiais, posicionadores hidráulicos e cabines fechadas com ar condicionado estão disponíveis."
    ],
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
