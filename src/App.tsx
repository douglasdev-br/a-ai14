import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Star, Clock, Truck, Smartphone, Tag, X, ChevronRight, MapPin, Instagram } from 'lucide-react';

const LINKS = {
  whatsapp: "https://api.whatsapp.com/send/?phone=61985405552&text=Ol%C3%A1%21+Gostaria+de+fazer+um+pedido.&type=phone_number&app_absent=0",
  ifood: "https://www.ifood.com.br/delivery/brasilia-df/acai-14-setor-oeste-sobradinho-ii/cf559df7-75c1-4cc6-87da-ab03e842e15c?UTM_Medium=share",
  instagram: "https://www.instagram.com/14acai/"
};

const IMAGES = {
  hero: "https://i.imgur.com/CSxoB22.png",
  menu: ["https://i.imgur.com/XT066qU.png"],
  reviews: [
    "https://i.imgur.com/fSJNCkw.png",
    "https://i.imgur.com/Fg3tLXw.png",
    "https://i.imgur.com/ycksotL.png",
    "https://i.imgur.com/u74Ggp4.png",
    "https://i.imgur.com/GRKck1F.png",
    "https://i.imgur.com/jsUhdzy.png",
    "https://i.imgur.com/nz8Hyz4.png"
  ],
  gallery: [
    "https://i.imgur.com/D6WL6Hw.png",
    "https://i.imgur.com/1oKvKh4.png",
    "https://i.imgur.com/BStlAOx.png",
    "https://i.imgur.com/NDPSYNy.png",
    "https://i.imgur.com/iHvlAUf.png",
    "https://i.imgur.com/fCvNpCQ.png",
    "https://i.imgur.com/1ewQtK4.png",
    "https://i.imgur.com/jCKBmpb.png",
    "https://i.imgur.com/g6ujYPX.png",
    "https://i.imgur.com/xxUKzpx.png"
  ]
};

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const openLightbox = (src: string) => setLightboxImg(src);
  const closeLightbox = () => setLightboxImg(null);

  return (
    <div className="min-h-screen bg-white selection:bg-acai-500 selection:text-white">
      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-zoom-out"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={lightboxImg}
              alt="Ampliada"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-black text-white px-4 pt-12 pb-24 md:pt-24 md:pb-32 flex flex-col items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="Açaí Delicioso" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center mt-12 md:mt-20">
          <motion.span 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-3 rounded-full bg-acai-600/30 border border-acai-500/50 text-acai-300 font-semibold tracking-wider text-xs sm:text-sm uppercase mb-6"
          >
            Açai 14 • Brasília DF
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6"
          >
            O Melhor <span className="text-transparent bg-clip-text bg-gradient-to-r from-acai-400 to-purple-400">Açaí Premium</span><br className="hidden sm:block"/> da Cidade.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl font-medium"
          >
            Sabor intenso, textura incrivelmente cremosa e ingredientes selecionados. Experiência irresistível a cada colherada.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row w-full max-w-md sm:max-w-none justify-center gap-4 px-2"
          >
            <a 
              href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-wapp hover:bg-wapp-hover text-white sm:text-lg font-bold py-4 px-8 rounded-2xl transition-transform active:scale-95 shadow-[0_0_30px_rgba(37,211,102,0.3)] w-full sm:w-auto"
            >
              <Smartphone size={24} />
              Pedir agora no WhatsApp
            </a>
            <a 
              href={LINKS.ifood} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-ifood hover:bg-ifood-hover text-white sm:text-lg font-bold py-4 px-8 rounded-2xl transition-transform active:scale-95 shadow-[0_0_30px_rgba(234,29,44,0.3)] w-full sm:w-auto"
            >
              <ShoppingBag size={24} />
              Pedir pelo iFood
            </a>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="mt-6 text-sm text-gray-400 flex items-center justify-center gap-2 font-medium"
          >
            <Clock size={16} /> Entrega rápida • Atendimento imediato
          </motion.p>
        </div>
      </section>

      {/* 2. O QUE É A AÇAÍ 14 */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Mais que Açaí, <span className="text-acai-600">Uma Experiência.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-medium">
              O Açai 14 nasceu para elevar o padrão em Brasília. Nós não montamos apenas copos, nós construímos a combinação perfeita entre frescor absoluto, cremosidade única e acompanhamentos de altíssima qualidade. O resultado? Um sabor inesquecível que faz todo cliente pedir de novo.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3. PROVAS SOCIAIS */}
      <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Quem Prova, <span className="text-acai-600">Aprova</span></h2>
              <p className="text-gray-500 font-medium tracking-wide text-sm uppercase">Avaliações reais de clientes satisfeitos</p>
            </div>
          </FadeIn>
          
          <div className="flex overflow-x-auto pb-8 gap-4 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-6">
            {IMAGES.reviews.map((img, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div 
                  className="w-72 md:w-auto flex-shrink-0 snap-center rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-white cursor-zoom-in hover:shadow-md transition-shadow group"
                  onClick={() => openLightbox(img)}
                >
                  <img src={img} alt={`Avaliação ${idx + 1}`} className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300" loading="lazy" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CARDÁPIO */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex flex-col items-center mb-14 text-center">
              <span className="inline-block p-3 rounded-full bg-acai-100 text-acai-600 mb-4">
                <ShoppingBag size={28} />
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nosso Cardápio</h2>
              <p className="text-lg text-gray-500 max-w-2xl font-medium">Toque nas imagens para ampliar e veja todas as nossas combinações irresistíveis.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {IMAGES.menu.map((img, idx) => (
              <FadeIn key={idx} delay={0.2}>
                <div 
                  className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 cursor-zoom-in group relative bg-gray-50"
                  onClick={() => openLightbox(img)}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 duration-300 flex items-center justify-center">
                    <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                      Ver Cardápio
                    </span>
                  </div>
                  <img src={img} alt={`Cardápio Menu ${idx + 1}`} className="w-full h-auto object-cover" loading="lazy" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. POR QUE ESCOLHER NOSSO AÇAÍ? */}
      <section className="py-24 px-6 bg-acai-900 text-white relative overflow-hidden">
        {/* Subtle decorative background blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-acai-600/30 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              O que faz nosso açaí ser <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">o favorito?</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Star />, title: "Açaí Super Cremoso", desc: "Textura aveludada e sem cristais de gelo, batido no ponto perfeito." },
              { icon: <ShoppingBag />, title: "Ingredientes Premium", desc: "Frutas frescas, nutella original e acompanhamentos rigorosamente selecionados." },
              { icon: <Clock />, title: "Sempre Fresco", desc: "Preparado na hora com agilidade para manter a consistência e sabor ideais." },
              { icon: <Truck />, title: "Entrega Rápida", desc: "Logística otimizada para que seu pedido chegue intacto e geladinho na sua casa." },
              { icon: <Smartphone />, title: "Fácil de Pedir", desc: "Atendimento ágil pelo WhatsApp ou pela praticidade do iFood." },
              { icon: <Tag />, title: "Preço Justo", desc: "O melhor custo-benefício de Brasília entregando padrão de excelência." }
            ].map((feature, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm group h-full">
                  <div className="w-14 h-14 rounded-2xl bg-acai-500/30 text-acai-300 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 font-medium leading-relaxed">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA INTERMEDIÁRIO */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Bateu a vontade?</h2>
            <p className="text-xl text-gray-600 mb-10 font-medium">Escolha o seu sabor favorito e faça seu pedido agora mesmo.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-wapp hover:bg-wapp-hover text-white font-bold py-4 px-8 rounded-2xl transition-transform active:scale-95 shadow-lg w-full sm:w-auto"
              >
                Fazer pedido no WhatsApp <ChevronRight size={20}/>
              </a>
              <a 
                href={LINKS.ifood} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-ifood hover:bg-ifood-hover text-white font-bold py-4 px-8 rounded-2xl transition-transform active:scale-95 shadow-lg w-full sm:w-auto"
              >
                Fazer pedido no iFood <ChevronRight size={20}/>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. COMO FUNCIONA O PEDIDO */}
      <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Como funciona?</h2>
              <p className="text-gray-500 font-medium">Praticidade do início ao fim.</p>
            </div>
          </FadeIn>

          <div className="flex flex-col md:flex-row gap-8 relative">
            {/* Connecting line desktop */}
            <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-1 bg-gray-200 z-0"></div>

            {[
              { step: "1", title: "Escolha e Peça", desc: "Acesse nosso WhatsApp ou iFood e monte do seu jeito." },
              { step: "2", title: "Preparo Prime", desc: "Montamos seu açaí com ingredientes frescos e muito cuidado." },
              { step: "3", title: "Entrega Segura", desc: "Receba rápido no conforto da sua casa ou retire no local." }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.2} className="flex-1 relative z-10 bg-white md:bg-transparent rounded-2xl p-6 md:p-0 border border-gray-100 md:border-none shadow-sm md:shadow-none text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-acai-100 text-acai-600 flex items-center justify-center text-2xl font-black mb-6 shadow-[0_0_0_8px_white]">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 font-medium">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 8. GALERIA DO PRODUTO */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Sinta pelo olhar 👀</h2>
              <p className="text-gray-500 font-medium">Beleza que antecipa o sabor.</p>
            </div>
          </FadeIn>

          {/* Masonry or Grid Layout for premium look */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {IMAGES.gallery.map((img, idx) => (
              <FadeIn key={idx} delay={Math.min(idx * 0.1, 0.5)}>
                <div 
                  className="rounded-2xl overflow-hidden shadow-sm cursor-zoom-in group"
                  onClick={() => openLightbox(img)}
                >
                  <img 
                    src={img} 
                    alt={`Galeria Açaí ${idx + 1}`} 
                    className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500" 
                    loading="lazy" 
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA FINAL */}
      <section className="py-24 px-6 bg-acai-900 relative overflow-hidden flex flex-col items-center text-center text-white">
        {/* Subtle patterned overlay or gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl w-full">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Peça agora e experimente o <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">melhor açaí de Brasília</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 font-medium max-w-2xl mx-auto">
              Sua melhor decisão do dia está a apenas um clique de distância.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-wapp hover:bg-wapp-hover text-white text-lg font-bold py-5 px-10 rounded-2xl transition-transform active:scale-95 shadow-[0_0_40px_rgba(37,211,102,0.4)] w-full sm:w-auto"
              >
                <Smartphone size={28} />
                Pedir no WhatsApp
              </a>
              <a 
                href={LINKS.ifood} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-ifood hover:bg-ifood-hover text-white text-lg font-bold py-5 px-10 rounded-2xl transition-transform active:scale-95 shadow-[0_0_40px_rgba(234,29,44,0.4)] w-full sm:w-auto"
              >
                <ShoppingBag size={28} />
                Pedir no iFood
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 10. RODAPÉ SIMPLES */}
      <footer className="bg-black text-gray-400 py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          
          <div className="flex flex-col gap-2">
            <h3 className="text-white text-2xl font-bold tracking-tight">Açai 14</h3>
            <p className="text-sm font-medium flex items-center justify-center md:justify-start gap-2">
              <MapPin size={16} className="text-acai-400" />
              Brasília DF, Sobradinho 2<br className="sm:hidden" /> AR 14 Conjunto 2 casa 13
            </p>
            <p className="text-sm font-medium">CEP 73062-402</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <a 
              href={LINKS.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-white hover:text-acai-400 transition-colors font-semibold"
            >
              <Instagram size={24} /> Siga nosso Instagram
            </a>
            <p className="text-sm">&copy; {new Date().getFullYear()} Açai 14. Todos os direitos reservados.</p>
          </div>

        </div>
      </footer>
      
    </div>
  );
}
