import { useState } from "react";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    state: "",
    city: "",
    interest: "",
    productInterest: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-bold text-[40px] text-dark">Contato</h2>
          <p className="text-gray-medium text-base mt-4 max-w-[640px] mx-auto leading-[1.8]">
            Entre em contato conosco e solicite um orçamento personalizado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Map & Info */}
          <div>
            <div className="rounded-xl overflow-hidden h-[340px] mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975881616584!2d-46.65390568502156!3d-23.56140398468089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização JCL Empilhadeiras"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-dark mt-0.5 flex-shrink-0" />
                <p className="text-dark text-sm">
                  Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-dark flex-shrink-0" />
                <p className="text-yellow font-bold text-sm">(11) 9999-8888</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-dark flex-shrink-0" />
                <a href="mailto:contato@jclempilhadeiras.com.br" className="text-yellow font-semibold text-sm hover:underline">
                  contato@jclempilhadeiras.com.br
                </a>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-dark rounded flex items-center justify-center text-dark hover:bg-dark hover:text-background transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <h3 className="font-bold text-lg text-dark uppercase mb-6">
              Envie sua Mensagem
            </h3>
            <form className="space-y-4">
              <FormField label="Nome Completo" name="name" value={formData.name} onChange={handleChange} />
              <FormField label="E-mail" name="email" type="email" value={formData.email} onChange={handleChange} />
              <div className="grid grid-cols-2 gap-4">
                <FormField label="Telefone" name="phone" value={formData.phone} onChange={handleChange} />
                <FormField label="WhatsApp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <FormField label="Estado" name="state" value={formData.state} onChange={handleChange} />
                <FormField label="Cidade" name="city" value={formData.city} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <SelectField
                  label="Tipo de Interesse"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  options={[
                    "Compra de Empilhadeira",
                    "Locação de Equipamento",
                    "Assistência Técnica",
                    "Peças e Acessórios",
                    "Outro",
                  ]}
                />
                <SelectField
                  label="Produto de Interesse"
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleChange}
                  options={[
                    "Empilhadeiras Elétricas",
                    "Empilhadeiras a Combustão",
                    "Transpaleteiras",
                    "Não sei ainda",
                  ]}
                />
              </div>
              <div>
                <label className="block font-semibold text-[11px] text-dark uppercase tracking-[0.8px] mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-[hsl(0,0%,82%)] rounded-md px-3.5 py-3 text-sm text-dark bg-background focus:border-yellow focus:border-2 focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-yellow text-dark font-bold text-sm uppercase py-3.5 px-12 rounded-md hover:opacity-90 transition-opacity"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const FormField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div>
    <label className="block font-semibold text-[11px] text-dark uppercase tracking-[0.8px] mb-2">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-[hsl(0,0%,82%)] rounded-md px-3.5 py-3 text-sm text-dark bg-background focus:border-yellow focus:border-2 focus:outline-none transition-colors"
    />
  </div>
);

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) => (
  <div>
    <label className="block font-semibold text-[11px] text-dark uppercase tracking-[0.8px] mb-2">
      {label}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-[hsl(0,0%,82%)] rounded-md px-3.5 py-3 text-sm text-dark bg-background focus:border-yellow focus:border-2 focus:outline-none transition-colors appearance-none"
    >
      <option value="">Selecione...</option>
      {options.map(opt => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

export default ContactSection;
