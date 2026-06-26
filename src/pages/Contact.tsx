import { useEffect, useState } from "react";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollTopButton from "@/components/ScrollTopButton";

const MAP_EMBED =
  "https://www.google.com/maps?q=R.+Cel.+Otaviano+da+Rocha,+1110,+Ubá+-+MG&output=embed";

const Contact = () => {
  useEffect(() => {
    document.title = "Contato — Inicie uma Cotação | JCL Empilhadeiras";
  }, []);

  const [form, setForm] = useState({
    name: "", email: "", whatsapp: "", phone: "",
    state: "", city: "", message: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen">
      <TopBar />
      <NavBar variant="dark" />
      <WhatsAppButton />
      <ScrollTopButton />

      <section className="bg-background py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left — map + info + institutional */}
            <div>
              <div className="rounded-xl overflow-hidden h-[360px] mb-6 shadow-sm">
                <iframe
                  src={MAP_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização JCL Empilhadeiras — Ubá MG"
                />
              </div>
              <div className="space-y-4">
                <InfoLine
                  Icon={MapPin}
                  label="ENDEREÇO"
                  value="R. Cel. Otaviano da Rocha, 1110 — São Domingos, Ubá - MG, 36504-042"
                />
                <InfoLine Icon={Phone} label="TELEFONE" value="32 3531-5957" href="tel:+553235315957" />
                <InfoLine
                  Icon={Mail}
                  label="E-MAIL"
                  value="vendas@jclempilhadeiras.com.br"
                  href="mailto:vendas@jclempilhadeiras.com.br"
                />
              </div>

              <p className="text-gray-medium text-[15px] leading-[1.8] mt-10">
                Entre em contato com a{" "}
                <span className="font-bold text-yellow-dark">JCL EMPILHADEIRAS</span>.
                Somos especialistas em equipamentos para manuseio de cargas. Fale
                conosco e descubra como podemos ajudar sua operação a ser mais eficiente.
              </p>
              <div className="flex gap-3 mt-5">
                {[
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Facebook, label: "Facebook" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="w-11 h-11 rounded-md border border-border text-gray-medium hover:bg-yellow hover:text-dark hover:border-yellow transition-colors flex items-center justify-center"
                    aria-label={`JCL no ${label}`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div>
              <h1 className="jcl-heading text-dark text-3xl md:text-4xl mb-8">
                INICIE UMA COTAÇÃO
              </h1>
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Mensagem enviada!"); }}>
                <Field label="NOME COMPLETO *" name="name" placeholder="Nome completo" value={form.name} onChange={onChange} required />
                <Field label="E-MAIL *" name="email" type="email" placeholder="email@email.com" value={form.email} onChange={onChange} required />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="WHATSAPP" name="whatsapp" placeholder="(19) 99999-9999" value={form.whatsapp} onChange={onChange} />
                  <Field label="TELEFONE" name="phone" placeholder="(19) 99999-9999" value={form.phone} onChange={onChange} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="ESTADO *" name="state" placeholder="Estado" value={form.state} onChange={onChange} required />
                  <Field label="CIDADE *" name="city" placeholder="Cidade" value={form.city} onChange={onChange} required />
                </div>
                <div>
                  <label className="block jcl-heading text-dark text-xs mb-2">MENSAGEM</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Mensagem"
                    value={form.message}
                    onChange={onChange}
                    className="w-full border border-input rounded-md px-3.5 py-3 text-sm bg-background focus:border-yellow focus:border-2 focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-yellow text-dark font-bold uppercase rounded-full px-14 py-4 text-base hover:bg-yellow-dark transition-colors min-h-[56px]"
                  aria-label="Enviar cotação"
                >
                  ENVIAR
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const InfoLine = ({
  Icon, label, value, href,
}: {
  Icon: typeof MapPin; label: string; value: string; href?: string;
}) => (
  <div className="flex items-start gap-3">
    <Icon size={20} className="text-yellow flex-shrink-0 mt-1" />
    <div>
      <p className="jcl-heading text-dark text-xs">{label}:</p>
      {href ? (
        <a href={href} className="text-dark text-sm hover:text-yellow">{value}</a>
      ) : (
        <p className="text-dark text-sm">{value}</p>
      )}
    </div>
  </div>
);

const Field = ({
  label, name, value, onChange, type = "text", required, placeholder,
}: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string; required?: boolean; placeholder?: string;
}) => (
  <div>
    <label className="block jcl-heading text-dark text-xs mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="w-full border border-input rounded-md px-3.5 py-3 text-sm bg-background focus:border-yellow focus:border-2 focus:outline-none transition-colors min-h-[44px]"
    />
  </div>
);

export default Contact;