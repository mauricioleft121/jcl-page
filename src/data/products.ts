import forkliftElectric from "@/assets/forklift-electric.jpg";
import forkliftCombustion from "@/assets/forklift-combustion.jpg";
import forkliftPallet from "@/assets/forklift-pallet.jpg";

export interface Product {
  slug: string;
  name: string;
  category: "Empilhadeiras Elétricas" | "Empilhadeiras a Combustão" | "Transpaleteiras";
  categoryColor: string;
  image: string;
  images: string[];
  shortDescription: string;
  description: string[];
  specs: Record<string, string>;
  availability: "Disponível" | "Sob Consulta" | "Locação disponível";
  applications: string[];
}

export const products: Product[] = [
  // Elétricas
  {
    slug: "jcl-e15",
    name: "JCL E15",
    category: "Empilhadeiras Elétricas",
    categoryColor: "hsl(142, 60%, 40%)",
    image: forkliftElectric,
    images: [forkliftElectric, forkliftElectric, forkliftElectric],
    shortDescription: "Empilhadeira elétrica compacta com capacidade de 1.500 kg, ideal para operações internas em armazéns e centros de distribuição.",
    description: [
      "A JCL E15 é a empilhadeira elétrica mais compacta da linha JCL, projetada para operações em corredores estreitos e ambientes internos com exigência de zero emissão de gases. Com capacidade de carga de 1.500 kg, é a escolha ideal para armazéns de pequeno e médio porte, centros de distribuição e indústrias alimentícias.",
      "Equipada com motor elétrico AC de alta eficiência e bateria de 48V, a JCL E15 oferece autonomia para até 8 horas contínuas de operação. Seu sistema de frenagem regenerativa recupera energia durante as desacelerações, aumentando a eficiência energética em até 15%.",
      "O design ergonômico do cockpit proporciona conforto ao operador durante longas jornadas. Os controles intuitivos e o display digital permitem monitoramento em tempo real da carga da bateria, horas de operação e diagnósticos do equipamento."
    ],
    specs: {
      "Capacidade de Carga": "1.500 kg",
      "Altura Máxima de Elevação": "4.500 mm",
      "Comprimento do Mastro": "2.100 mm",
      "Largura Total": "1.060 mm",
      "Peso do Equipamento": "3.200 kg",
      "Tipo de Motor": "Elétrico AC",
      "Tensão": "48V / 560Ah",
      "Velocidade de Deslocamento": "16 km/h"
    },
    availability: "Disponível",
    applications: ["Armazéns internos", "Centros de distribuição", "Indústria alimentícia", "Câmaras frias", "Farmacêutica"]
  },
  {
    slug: "jcl-e20",
    name: "JCL E20",
    category: "Empilhadeiras Elétricas",
    categoryColor: "hsl(142, 60%, 40%)",
    image: forkliftElectric,
    images: [forkliftElectric, forkliftElectric, forkliftElectric],
    shortDescription: "Empilhadeira elétrica versátil com capacidade de 2.000 kg, equilíbrio perfeito entre potência e eficiência.",
    description: [
      "A JCL E20 combina potência e eficiência em uma empilhadeira elétrica projetada para operações de média intensidade. Com capacidade de 2.000 kg, ela atende perfeitamente às necessidades de armazéns, indústrias e operações logísticas que demandam versatilidade.",
      "Seu motor elétrico AC de alto torque garante desempenho superior em rampas e superfícies irregulares. A bateria de 80V oferece autonomia estendida e recarga rápida, minimizando o tempo de inatividade e maximizando a produtividade.",
      "A JCL E20 conta com sistema de direção assistida, cabine com proteção superior e múltiplos sensores de segurança. O mastro triplex permite elevação de até 5.500 mm, atendendo às necessidades de empilhamento em prateleiras altas."
    ],
    specs: {
      "Capacidade de Carga": "2.000 kg",
      "Altura Máxima de Elevação": "5.500 mm",
      "Comprimento do Mastro": "2.350 mm",
      "Largura Total": "1.120 mm",
      "Peso do Equipamento": "3.800 kg",
      "Tipo de Motor": "Elétrico AC",
      "Tensão": "80V / 620Ah",
      "Velocidade de Deslocamento": "18 km/h"
    },
    availability: "Disponível",
    applications: ["Armazéns logísticos", "Indústria automotiva", "Centros de distribuição", "E-commerce", "Varejo atacadista"]
  },
  {
    slug: "jcl-e30",
    name: "JCL E30",
    category: "Empilhadeiras Elétricas",
    categoryColor: "hsl(142, 60%, 40%)",
    image: forkliftElectric,
    images: [forkliftElectric, forkliftElectric, forkliftElectric],
    shortDescription: "Empilhadeira elétrica de alta capacidade com 3.000 kg, para operações pesadas em ambientes internos.",
    description: [
      "A JCL E30 é a mais robusta da linha elétrica JCL, projetada para operações pesadas que exigem alta capacidade de carga sem abrir mão dos benefícios da tração elétrica. Com 3.000 kg de capacidade, ela é ideal para indústrias pesadas e operações logísticas de grande porte.",
      "O sistema dual-motor proporciona tração e elevação simultâneas com máxima eficiência. A tecnologia de gerenciamento inteligente de energia otimiza o consumo da bateria de acordo com a carga e o perfil de operação, garantindo autonomia de até 10 horas.",
      "Equipada com sistema avançado de estabilidade eletrônica, a JCL E30 ajusta automaticamente a velocidade em curvas e controla a inclinação do mastro para prevenir tombamento. O painel digital completo fornece informações em tempo real sobre todos os parâmetros operacionais."
    ],
    specs: {
      "Capacidade de Carga": "3.000 kg",
      "Altura Máxima de Elevação": "6.000 mm",
      "Comprimento do Mastro": "2.600 mm",
      "Largura Total": "1.250 mm",
      "Peso do Equipamento": "4.800 kg",
      "Tipo de Motor": "Elétrico AC Dual",
      "Tensão": "80V / 775Ah",
      "Velocidade de Deslocamento": "20 km/h"
    },
    availability: "Sob Consulta",
    applications: ["Indústria pesada", "Siderúrgica", "Logística de grande porte", "Portos secos", "Centros de distribuição"]
  },
  // Combustão
  {
    slug: "jcl-glp25",
    name: "JCL GLP25",
    category: "Empilhadeiras a Combustão",
    categoryColor: "hsl(25, 90%, 50%)",
    image: forkliftCombustion,
    images: [forkliftCombustion, forkliftCombustion, forkliftCombustion],
    shortDescription: "Empilhadeira a GLP com capacidade de 2.500 kg, robusta e versátil para operações internas e externas.",
    description: [
      "A JCL GLP25 é uma empilhadeira a gás liquefeito de petróleo (GLP) projetada para oferecer a versatilidade necessária em operações que transitam entre ambientes internos e externos. Com capacidade de 2.500 kg, ela é a escolha ideal para indústrias, depósitos e centros logísticos.",
      "Seu motor a GLP de 4 cilindros oferece potência consistente e emissões reduzidas comparado ao diesel, tornando-a adequada para ambientes semi-fechados. O sistema de combustão otimizado garante consumo eficiente e intervalos de manutenção estendidos.",
      "O design robusto do chassi e os pneus pneumáticos de alta performance garantem estabilidade em terrenos irregulares e pisos industriais. A cabine ergonômica com suspensão no assento proporciona conforto durante operações prolongadas."
    ],
    specs: {
      "Capacidade de Carga": "2.500 kg",
      "Altura Máxima de Elevação": "5.000 mm",
      "Comprimento do Mastro": "2.400 mm",
      "Largura Total": "1.150 mm",
      "Peso do Equipamento": "4.200 kg",
      "Tipo de Motor": "GLP 4 cilindros",
      "Capacidade do Tanque": "15 kg",
      "Velocidade de Deslocamento": "22 km/h"
    },
    availability: "Disponível",
    applications: ["Pátios externos", "Indústria metalúrgica", "Depósitos de materiais", "Construção civil", "Operações mistas"]
  },
  {
    slug: "jcl-glp35",
    name: "JCL GLP35",
    category: "Empilhadeiras a Combustão",
    categoryColor: "hsl(25, 90%, 50%)",
    image: forkliftCombustion,
    images: [forkliftCombustion, forkliftCombustion, forkliftCombustion],
    shortDescription: "Empilhadeira a GLP de alta capacidade com 3.500 kg, ideal para cargas pesadas em operações industriais.",
    description: [
      "A JCL GLP35 é uma empilhadeira de alto desempenho a GLP, desenvolvida para operações industriais que exigem movimentação de cargas pesadas com agilidade. Sua capacidade de 3.500 kg a torna ideal para indústrias de transformação, centros de distribuição e operações de carga e descarga.",
      "O motor turbo a GLP entrega torque superior para elevação de cargas pesadas e deslocamento em rampas. O sistema de transmissão powershift permite mudanças suaves de direção sem perda de velocidade, aumentando a produtividade operacional.",
      "A JCL GLP35 incorpora tecnologias de segurança avançadas, incluindo sistema de controle de velocidade em curvas, limitador de carga e câmera de ré com display integrado. O sistema OBD II facilita diagnósticos rápidos e manutenção preditiva."
    ],
    specs: {
      "Capacidade de Carga": "3.500 kg",
      "Altura Máxima de Elevação": "5.500 mm",
      "Comprimento do Mastro": "2.600 mm",
      "Largura Total": "1.280 mm",
      "Peso do Equipamento": "5.100 kg",
      "Tipo de Motor": "GLP Turbo 4 cilindros",
      "Capacidade do Tanque": "18 kg",
      "Velocidade de Deslocamento": "24 km/h"
    },
    availability: "Locação disponível",
    applications: ["Indústria de transformação", "Centros de distribuição", "Carga e descarga", "Siderúrgica", "Operações externas"]
  },
  {
    slug: "jcl-diesel40",
    name: "JCL Diesel40",
    category: "Empilhadeiras a Combustão",
    categoryColor: "hsl(25, 90%, 50%)",
    image: forkliftCombustion,
    images: [forkliftCombustion, forkliftCombustion, forkliftCombustion],
    shortDescription: "Empilhadeira diesel robusta com 4.000 kg de capacidade, máxima potência para operações externas pesadas.",
    description: [
      "A JCL Diesel40 é a empilhadeira mais poderosa da linha JCL, equipada com motor diesel de 4 cilindros turbo que entrega performance excepcional para as operações mais exigentes. Com capacidade de 4.000 kg, ela é a solução definitiva para pátios industriais, estaleiros e operações de carga pesada.",
      "O motor diesel turbo de última geração atende às normas de emissão vigentes e oferece consumo otimizado de combustível. O tanque de 65 litros garante autonomia para jornadas completas de trabalho, enquanto o sistema de arrefecimento reforçado mantém a temperatura operacional ideal mesmo em condições extremas.",
      "Projetada para resistir às condições mais adversas, a JCL Diesel40 conta com chassi reforçado, proteção inferior do motor, pneus maciços opcionais e sistema elétrico selado contra poeira e umidade. Ideal para operações em pátios abertos, indústrias pesadas e ambientes com alto nível de exigência."
    ],
    specs: {
      "Capacidade de Carga": "4.000 kg",
      "Altura Máxima de Elevação": "6.500 mm",
      "Comprimento do Mastro": "2.800 mm",
      "Largura Total": "1.380 mm",
      "Peso do Equipamento": "5.900 kg",
      "Tipo de Motor": "Diesel Turbo 4 cilindros",
      "Capacidade do Tanque": "65 litros",
      "Velocidade de Deslocamento": "25 km/h"
    },
    availability: "Sob Consulta",
    applications: ["Pátios industriais", "Estaleiros", "Portos", "Mineração", "Construção pesada"]
  },
  // Transpaleteiras
  {
    slug: "jcl-tp15-manual",
    name: "JCL TP15 Manual",
    category: "Transpaleteiras",
    categoryColor: "hsl(210, 70%, 50%)",
    image: forkliftPallet,
    images: [forkliftPallet, forkliftPallet, forkliftPallet],
    shortDescription: "Transpaleteira manual com capacidade de 1.500 kg, solução econômica para movimentação horizontal de paletes.",
    description: [
      "A JCL TP15 Manual é a solução mais econômica e prática para movimentação horizontal de paletes em armazéns, estoques e áreas de expedição. Com capacidade de 1.500 kg, ela é ideal para operações que não exigem elevação vertical, mas necessitam de agilidade no transporte de cargas paletizadas.",
      "Construída com aço reforçado e componentes hidráulicos de alta qualidade, a JCL TP15 Manual oferece durabilidade excepcional e baixíssimo custo de manutenção. O sistema hidráulico de acionamento manual permite elevação suave dos garfos com esforço mínimo do operador.",
      "O design compacto e os rodízios de poliuretano de alta resistência garantem manobrabilidade em espaços reduzidos e operação silenciosa. Ideal para varejo, pequenos armazéns e operações de picking."
    ],
    specs: {
      "Capacidade de Carga": "1.500 kg",
      "Altura Máxima de Elevação": "200 mm",
      "Comprimento dos Garfos": "1.150 mm",
      "Largura Total": "550 mm",
      "Peso do Equipamento": "72 kg",
      "Tipo de Motor": "Manual (hidráulico)",
      "Velocidade de Deslocamento": "Operador"
    },
    availability: "Disponível",
    applications: ["Varejo", "Pequenos armazéns", "Expedição", "Área de picking", "Estoque"]
  },
  {
    slug: "jcl-tp20e",
    name: "JCL TP20E Elétrica",
    category: "Transpaleteiras",
    categoryColor: "hsl(210, 70%, 50%)",
    image: forkliftPallet,
    images: [forkliftPallet, forkliftPallet, forkliftPallet],
    shortDescription: "Transpaleteira elétrica com capacidade de 2.000 kg, operação ágil com mínimo esforço do operador.",
    description: [
      "A JCL TP20E é uma transpaleteira elétrica projetada para operações de média e alta intensidade que exigem agilidade e conforto do operador. Com capacidade de 2.000 kg e tração elétrica, ela elimina o esforço físico da movimentação de paletes, aumentando significativamente a produtividade.",
      "O motor elétrico silencioso e a bateria de lítio de 24V garantem autonomia de até 6 horas de operação contínua. O carregamento rápido em apenas 3 horas permite utilização em múltiplos turnos com bateria reserva.",
      "Equipada com acelerador proporcional no timão, freio eletromagnético e sistema de proteção contra sobrecarga. O display LED indica nível de carga da bateria e horas de operação. Ideal para centros de distribuição, e-commerce e operações logísticas modernas."
    ],
    specs: {
      "Capacidade de Carga": "2.000 kg",
      "Altura Máxima de Elevação": "210 mm",
      "Comprimento dos Garfos": "1.150 mm",
      "Largura Total": "580 mm",
      "Peso do Equipamento": "165 kg",
      "Tipo de Motor": "Elétrico 24V",
      "Tensão": "24V / 210Ah (Lítio)",
      "Velocidade de Deslocamento": "6 km/h"
    },
    availability: "Locação disponível",
    applications: ["Centros de distribuição", "E-commerce", "Supermercados", "Indústria alimentícia", "Operações de cross-docking"]
  }
];

export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);

export const getRelatedProducts = (slug: string, limit = 3) => {
  const product = getProductBySlug(slug);
  if (!product) return products.slice(0, limit);
  return products.filter(p => p.slug !== slug && p.category === product.category).length > 0
    ? products.filter(p => p.slug !== slug && p.category === product.category).slice(0, limit)
    : products.filter(p => p.slug !== slug).slice(0, limit);
};

export const categories = ["Empilhadeiras Elétricas", "Empilhadeiras a Combustão", "Transpaleteiras"] as const;
