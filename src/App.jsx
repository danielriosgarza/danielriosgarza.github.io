// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./SideBar";
import Home from "./Home";
import Categories from "./Categories";
import Archives from "./Archives"; 
import About from "./About";
import FundedProjects from "./FundedProjects";

function App() {
  // Example articles with multiple categories
  const articles = [
    {
      id: 1,
      title: "Healthy gut microbiomes are host-controllable microbiomes",
      authors: "Théodore Bouchez; Bin Liu; Daniel Rios Garza",
      image: "/assets/img/dgarza2025.jpg",
      summary: `“The instinct of each species is good for itself but has never, as far as we can judge, been produced for the exclusive good of others” (Darwin, 1859). Why, then, do humans and other mammals benefit from their microbes?`,
      categories: ["microbiome control theory", "gut microbiome"],
      date: "2025-01-08",
      link: "https://www.frontiersin.org/journals/microbiology/articles/10.3389/fmicb.2024.1497083/full"
    },
    {
      id: 2,
      title: "Discovery of alternative stable states in a synthetic human gut microbial community",
      image: "/assets/img/dgarza2024.png",
      authors:"Daniel Rios Garza, Bin Liu, Charlotte van de Velde ... Karoline Faust",
      summary: "Several human-associated microbial communities exist in multiple configurations and can change their composition in response to perturbations, remaining in an altered state even after the perturbation ends",
      categories: ["alternative steady states", "microbiome models", "gut microbiome"],
      date: "2024-11-28",
      link: "https://www.biorxiv.org/content/10.1101/2024.11.28.625814v1"
    },
    {
      id: 3,
      title: "Improving genome-scale metabolic models of incomplete genomes with deep learning",
      authors:"Meine D. Boer, Chrats Melkonian, Haris Zafeiropoulos, Andreas F. Haas, Daniel R. Garza, Bas E. Dutilh",
      image: "/assets/img/boer2023.jpg",
      summary: "Deciphering microbial metabolism is essential for understanding ecosystem functions. Genome-scale metabolic models (GSMMs) predict metabolic traits from genomic data, but constructing GSMMs for uncultured bacteria is challenging due to incomplete metagenome-assembled genomes, resulting in many gaps",      
      categories: ["genome-scale metabolic models", "deep learning"],
      date: "2024-12-20",
      link: "https://www.cell.com/iscience/fulltext/S2589-0042(24)02574-4?uuid=uuid%3A5aee8e08-a32d-474f-a439-50399333f7d4"
    },
    {
      id: 4,
      title: "Starvation responses impact interaction dynamics of human gut bacteria...",
      authors:"Bin Liu, Daniel Rios Garza, ...Karoline Faust",
      image: "/assets/img/liu2023.jpeg",
      summary: "Bacterial growth often alters the environment, which in turn can impact interspecies interactions among bacteria. Here, we used an in vitro batch system containing mucin beads to emulate the dynamic host environment and to study its impact on the interactions between two abundant and prevalent human gut bacteria",      
      categories: ["gut microbiome", "microbiome models"],
      date: "2023-11-11",
      link: "https://doi.org/10.1038/s41396-023-01501-1"
    },
    {
      id: 5,
      title: "Exploiting gut microbial traits and trade-offs in microbiome-based therapeutics",
      authors:"Bin Liu, Daniel Rios Garza, Pallabita Saha, Xingjian Zhou, Karoline Faust",
      image: "/assets/img/liu2024.png",
      summary: "The clinical translation of therapeutics on the basis of human gut microorganisms is hampered by our limited knowledge of how microbes survive and adapt to fluctuating conditions in the gut. The systematic exploration of gut microbiome survival strategies and trade-offs will thus enable the design of more efficient microbiome-based interventions.",      
      categories: ["gut microbiome", "microbiome models", "microbiome control theory"],
      date: "2024-04-04",
      link: "https://www.nature.com/articles/s44222-024-00178-1"
    },
    {
      id: 6,
      title: "miaSim: an R/Bioconductor package to easily simulate microbial community dynamics",
      authors:"Yu Gao, ... Leo Lahti, Karoline Faust, Daniel Rios Garza",
      image: "/assets/img/gao2023.jpg",
      summary: "Microbiomes never stop changing. Their compositions and functions are shaped by the complex interplay of intrinsic and extrinsic drivers, such as growth and migration rates, species interactions, available nutrients and environmental conditions. Mathematical models help us make sense of these complex drivers and intuitively explain how, why and when specific microbiome states are reached while others are not.",      
      categories: ["microbiome models"],
      date: "2023-05-27",
      link: "https://doi.org/10.1111/2041-210X.14129"
    },
    {
      id: 7,
      title: "Metabolic models of human gut microbiota: Advances and challenges",
      authors:"Daniel Rios Garza, Didier Gonze, Haris Zafeiropoulos, Bin Liu, Karoline Faust",
      image: "/assets/img/garza2023.jpg",
      summary: "The human gut is a complex ecosystem consisting of hundreds of microbial species interacting with each other and with the human host. Mathematical models of the gut microbiome integrate our knowledge of this system and help to formulate hypotheses to explain observations",      
      categories: ["microbiome models", "genome-scale metabolic models"],
      date: "2023-02-15",
      link: "https://www.cell.com/cell-systems/fulltext/S2405-4712(22)00437-9"
    },
    {
      id: 8,
      title: "Towards predicting the environmental metabolome from metagenomics with a mechanistic model",
      authors:"Daniel Rios Garza, Marcel C. van Verk, Martijn A. Huynen, Bas E. Dutilh",
      image: "/assets/img/garza2018.png",
      summary: "The environmental metabolome and metabolic potential of microorganisms are dominant and essential factors shaping microbial community composition",      
      categories: ["genome-scale metabolic models", "computational metabolome"],
      date: "2018-03-12",
      link: "https://www.nature.com/articles/s41564-018-0124-8"
    },
    {
      id: 9,
      title: "Nutrition or nature: using elementary flux modes to disentangle ...prokaryote pan-genomes",
      authors:"Daniel R Garza, FA Bastiaan von Meijenfeldt, Bram van Dijk, Annemarie Boleij, Martijn A Huynen, Bas E Dutilh",
      image: "/assets/img/garza2022.png",
      summary: "Microbial pan-genomes are shaped by a complex combination of stochastic and deterministic forces. Even closely related genomes exhibit extensive variation in their gene content",      
      categories: ["genome-scale metabolic models", "elementary flux modes", "pan-genomes", "computational metabolome"],
      date: "2022-08-16",
      link: "https://link.springer.com/article/10.1186/s12862-022-02052-3"
    },
    {
      id: 10,
      title: "Bacterial oncotraits rather than spatial organization are associated with dysplasia in ulcerative colitis",
      authors:"Carlijn E Bruggeling, Maarten te Groen, Daniel R Garza,...Annemarie Boleij",
      image: "/assets/img/bruggeling2024.jpeg",
      summary: "Colonic bacterial biofilms are frequently present in ulcerative colitis [UC] and may increase dysplasia risk through pathogens expressing oncotraits. This prospective cohort study aimed to determine [1] the association of oncotraits and longitudinal biofilm presence with dysplasia risk in UC, and [2] the relation of bacterial composition with biofilms and dysplasia risk",      
      categories: ["gut microbiome", "metagenomics", "bioinformatics"],
      date: "2023-05-27",
      link: "https://academic.oup.com/ecco-jcc/article/17/11/1870/7181091?login=true"
    },
    {
      id: 11,
      title: "BCG-induced trained immunity enhances acellular pertussis vaccination responses...",
      authors:"Joshua Gillard, Bastiaan A. Blok, Daniel R. Garza, Prashanna Balaji Venkatasubramanian...",
      image: "/assets/img/gillard2022.png",
      summary: "Acellular pertussis (aP) booster vaccines are central to pertussis immunization programs, although their effectiveness varies",      
      categories: ["machine learning", "bioinformatics"],
      date: "2023-02-17",
      link: "https://www.nature.com/articles/s41541-022-00438-4"
    },
    {
      id: 12,
      title: "A Prioritized and Validated Resource of Mitochondrial Proteins in Plasmodium...",
      authors:"Selma L van Esveld...Bas E Dutilh, Daniel R Garza...Martijn A Huynen",
      image: "/assets/img/esveld2021.png",
      summary: "Plasmodium species have a single mitochondrion that is essential for their survival and has been successfully targeted by antimalarial drugs. Most mitochondrial proteins are imported into this organelle, and our picture of the Plasmodium mitochondrial proteome remains incomplete",      
      categories: ["machine learning", "bioinformatics"],
      date: "2021-09-8",
      link: "https://journals.asm.org/doi/full/10.1128/msphere.00614-21"
    },
    {
      id: 13,
      title: "Optimized bacterial DNA isolation method for microbiome analysis of human tissues",
      authors:"Carlijn E. Bruggeling, Daniel R. Garza, Soumia Achouiti, Wouter Mes, Bas E. Dutilh, Annemarie Bolei",
      image: "/assets/img/bruggeling2021.jpeg",
      summary: "We present a bacterial DNA isolation method for human colon biopsies which includes reduction of human DNA and does not distort relative bacterial abundance at the phylum level",      
      categories: ["metagenomics", "lab methods", "gut microbiome"],
      date: "2021-06-1",
      link: "https://onlinelibrary.wiley.com/doi/full/10.1002/mbo3.1191"
    },
    {
      id: 14,
      title: "Novel insights from the Plasmodium falciparum sporozoite-specific proteome by probabilistic integration...",
      authors:"Lisette Meerstein-Kessel,Jeron Venhuizen,Daniel Garza, ..., Martijn A. Huynen",
      image: "/assets/img/meersteinkessel2021.png",
      summary: "Plasmodium species, the causative agent of malaria, have a complex life cycle involving two hosts",      
      categories: ["machine learning", "bioinformatics"],
      date: "2021-05-30",
      link: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1008067"
    },
    {
      id: 15,
      title: "Metabolic models predict bacterial passengers in colorectal cancer",
      authors:"Daniel Rios Garza, Rahwa Taddese, Jakob Wirbel, Georg Zeller, Annemarie Boleij, Martijn A. Huynen & Bas E. Dutilh",
      image: "/assets/img/garza2020.png",
      summary: "Colorectal cancer (CRC) is a complex multifactorial disease. Increasing evidence suggests that the microbiome is involved in different stages of CRC initiation and progression",      
      categories: ["genome-scale metabolic models", "gut microbiome", "computational metabolome"],
      date: "2020-02-10",
      link: "https://link.springer.com/article/10.1186/s40170-020-0208-9"
    },
    {
      id: 16,
      title: "Growth rate alterations of human colorectal cancer cells by 157 gut bacteria",
      authors:"Rahwa Taddese,Daniel Rios Garza, ...Bas E. Dutilh, Annemarie Boleij",
      image: "/assets/img/taddese2020.jpg",
      summary: "Several bacteria in the human gut microbiome have been associated with colorectal cancer (CRC) by high-throughput screens. In some cases, molecular mechanisms have been elucidated that drive tumorigenesis, including bacterial membrane proteins or secreted molecules that interact with the human cancer cells",      
      categories: ["gut bacteria", "gut microbiome", "lab methods"],
      date: "2020-09-11",
      link: "https://doi.org/10.1080/19490976.2020.1799733"
    },
    {
      id: 17,
      title: "Elucidating genomic gaps using phenotypic profiles",
      authors:"Daniel A. Cuevas, Daniel Garza...Robert A. Edwards",
      image: "/assets/img/cuevas2016.png",
      summary: "Advances in genomic sequencing provide the ability to model the metabolism of organisms from their genome annotation. The bioinformatics tools developed to deduce gene function through homology-based methods are dependent on public databases",      
      categories: ["genome-scale metabolic models", "computational metabolome", "gap-filling"],
      date: "2016-10-17",
      link: "https://f1000research.com/articles/3-210"
    },
    {
      id: 18,
      title: "From cultured to uncultured genome sequences: metagenomics and modeling microbial ecosystems",
      authors:"Daniel Rios Garza & Bas E. Dutilh",
      image: "/assets/img/garza2015.png",
      summary: "Microorganisms and the viruses that infect them are the most numerous biological entities on Earth and enclose its greatest biodiversity and genetic reservoir. With strength in their numbers, these microscopic organisms are major players in the cycles of energy and matter that sustain all life",      
      categories: ["microbiome models", "metagenomics"],
      date: "2015-08-09",
      link: "https://link.springer.com/article/10.1007/s00018-015-2004-1"
    },
    {
      id: 19,
      title: "Comparative genomics of 274 Vibrio cholerae genomes reveals...",
      authors:"Bas E Dutilh, ...Daniel R Garza... Robert A Edwards",
      image: "/assets/img/dutilh2014.webp",
      summary: "Vibrio cholerae is a globally dispersed pathogen that has evolved with humans for centuries, but also includes non-pathogenic environmental strains. Here, we identify the genomic variability underlying this remarkable persistence across the three major niche dimensions space, time, and habitat",      
      categories: ["machine learning", "bioinformatics", "microbial genomics"],
      date: "2014-08-05",
      link: "https://link.springer.com/article/10.1186/1471-2164-15-654"
    },
    {
      id: 20,
      title: "Genome-Wide Study of the Defective Sucrose Fermenter Strain of Vibrio cholerae...",
      authors:"Daniel Rios Garza, Cristiane C. Thompson...",
      image: "/assets/img/garza2012.png",
      summary: "The 7th cholera pandemic reached Latin America in 1991, spreading from Peru to virtually all Latin American countries. During the late epidemic period, a strain that failed to ferment sucrose dominated cholera outbreaks in the Northern Brazilian Amazon region",      
      categories: ["machine learning", "bioinformatics", "microbial genomics"],
      date: "2012-05-25",
      link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0037283"
    },
    {
      id: 21,
      title: "Population and Genetic Study of Vibrio cholerae from the Amazon Environment...",
      authors:"Lena Líllian Canto de Sá Morais ,Daniel Rios Garza...",
      image: "/assets/img/garza2013.png",
      summary: "Vibrio cholerae is a natural inhabitant of many aquatic environments in the world. Biotypes harboring similar virulence-related gene clusters are the causative agents of epidemic cholera, but the majority of strains are harmless to humans",      
      categories: ["bioinformatics", "microbial genomics", "lab methods"],
      date: "2013-11-23",
      link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0081372"
    },
    {
      id: 22,
      title: "Exploring microbial ecology and evolution with genome-scale metabolic models",
      authors:"Daniel Rios Garza [PhD thesis]",
      image: "/assets/img/animalocaris.png",
      summary: "Metabolism is one of the main defining features of life on our planet. All cells are home to an integrated series of biochemical reactions that generate energy and provide the building blocks to assemble molecular structures",      
      categories: ["genome-scale metabolic models", "microbiome models", "computational metabolome"],
      date: "2020-09-01",
      link: "https://repository.ubn.ru.nl/bitstream/handle/2066/221676/221676.pdf?sequence=1&isAllowed=y"
    }
    
  ];

  // Create a UNIQUE array of category names
  const allCategories = [
    ...new Set(articles.flatMap((article) => article.categories))
  ];

  return (
    <Router>
      <div className="App">
        <SideBar />
        <div className="main-content">
          <Routes>
            {/* Home route (no category) */}
            <Route 
              path="/" 
              element={<Home articles={articles} />} 
            />

            {/* Categories list page (optional) */}
            <Route 
              path="/categories" 
              element={<Categories categories={allCategories} />} 
            />

            {/* Category route (filtered by categoryName) */}
            <Route
              path="/categories/:categoryName"
              element={<Home articles={articles} />}
            />
             {/* New Archives route */}
            <Route 
              path="/archives" 
              element={<Archives articles={articles} />} 
            />
            <Route 
              path="/about" 
              element={<About />} 
            />
             <Route 
              path="/funded" 
              element={<FundedProjects />}
            />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;