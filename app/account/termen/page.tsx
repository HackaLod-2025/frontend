"use client";

import { AccountNavigation } from "@/components/account-navigation";
import { TermsHero } from "@/components/terms-hero";
import { TermsSearch } from "@/components/term-search";
import { FormEvent, Fragment, useState } from "react";
import { SearchResults } from "@/components/search-results";
import { TermsResult } from "@/app/types/terms";

export default function TermenPage() {
  const [searchData, setSearchData] = useState<TermsResult | null>(null);

  const mockSourcesData: TermsResult = {
    terms: [
      {
        uri: "http://vocab.getty.edu/aat/300379427",
        prefLabel: "architectural photogrammetry",
        scopeNote:
          "Refers to use of terrestrial photogrammetry to measure, survey, or map architectural structures, particularly historical monuments and sites.",
        source: "Art & Architecture Thesaurus - processes and techniques",
      },
      {
        uri: "http://vocab.getty.edu/aat/300451690",
        prefLabel: "palm leaf architecture (construction technique)",
        scopeNote:
          "Construction technique using palm fronds and other parts of the palm, sometimes with materials from other plants. Examples are the structures made from date palms in the Middle East.",
        source: "Art & Architecture Thesaurus - processes and techniques",
      },
      {
        uri: "http://vocab.getty.edu/aat/300056446",
        prefLabel: "academic architecture",
        scopeNote:
          "Conforming to the architectural theories of the European and American academies of architecture.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300020106",
        prefLabel: "Aegean architecture styles",
        scopeNote: "Architecture styles belonging to Aegean cultures.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300107354",
        prefLabel: "ancient Italian architecture styles",
        scopeNote:
          "Architecture styles belonging to ancient Italian cultures. ",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300380002",
        prefLabel: "animal architecture",
        scopeNote:
          "Structures created by animals other than humans, most commonly by various mammals, birds, insects, and arachnids, occasionally by fish, reptiles, amphibians, crustaceans, mollusks, annelids, marine filter feeders, and others. Building materials may be collected material or self-secreted material. Animals create structures primarily to make protected habitats for thermo-regulation and safety from predators, to trap prey, and for display between members of the same species.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300444300",
        prefLabel: "anonymous architecture",
        scopeNote:
          "General term for built works, often local and of nonestablished style, where the architect is unknown and typically unknowable.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300379371",
        prefLabel: "architectural conservation",
        scopeNote:
          "Describes all interventions pursued by architectural conservators to preserve the integrity of built objects, directed toward the long-term safekeeping of architectural heritage.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300054162",
        prefLabel: "architectural history",
        scopeNote:
          "Study of the development over time of the human built environment.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300067402",
        prefLabel: "architectural orders (assembly and style)",
        scopeNote:
          'In architecture, the arrangement of bearing and carried parts in post and beam construction, usually the ensemble of column with its entablature and base, which encodes standardized details and style, or variations of these. For the traditional five orders of classical architecture, prefer the narrower concept "classical orders."',
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300440737",
        prefLabel: "architectural paintings",
        scopeNote:
          "Visual works where architecture is depicted in outdoor views and interiors and where the architecture is the predominant focus of the painting. In European art, architectural paintings exist as an independent genre developed in the 16th century in Flanders and the Netherlands, and reached its peak in 17th century Dutch painting.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300379427",
        prefLabel: "architectural photogrammetry",
        scopeNote:
          "Refers to use of terrestrial photogrammetry to measure, survey, or map architectural structures, particularly historical monuments and sites.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300444414",
        prefLabel: "architectural schools (buildings)",
        scopeNote:
          "Buildings housing academic enterprises that teach the theory and practice of architecture.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300055882",
        prefLabel: "architectural theory",
        scopeNote: "N/A",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300054156",
        prefLabel: "architecture (discipline)",
        scopeNote:
          'The art or science of designing and building structures, especially habitable structures, in accordance with principles determined by aesthetic and practical or material considerations.  For a general term for the actual structures or parts of structures that were made by human beings, see "architecture (object genre)." ',
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300263552",
        prefLabel: "architecture (object genre)",
        scopeNote:
          'Structures or parts of structures that are the result of conscious construction, are of practical use, are relatively stable and permanent, and are of a size and scale appropriate for--but not limited to--habitable buildings. Works of architecture are manifestations of the built environment that is typically classified as fine art, meaning it is generally considered to have aesthetic value, was designed by an architect (whether or not his or her name is known), and constructed with skilled labor. For the art or science of designing and building structures, use "architecture (discipline)."',
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300056445",
        prefLabel: "architecture genres",
        scopeNote:
          "Categories of architecture that are characterized by form or content.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300444409",
        prefLabel: "beach architecture",
        scopeNote:
          "Buildings, stands, and other structures built upon the beach.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300265318",
        prefLabel: "blob architecture",
        scopeNote:
          "Spaces with fluidly curves surfaces, usually designed with the aid of computer software.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300020795",
        prefLabel: "British Isles Medieval architecture styles",
        scopeNote:
          "Architecture styles belonging to British Isles Medieval cultures. ",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300112476",
        prefLabel: "British Renaissance-Baroque architecture styles",
        scopeNote:
          "Architecture styles belonging to British Renaissance-Baroque cultures.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300457667",
        prefLabel: "cast iron architecture",
        scopeNote:
          "Built works cosntructed primarily of cast iron, including commercial buildings warehouses, bridges, and others. Fourished during the Industrial Revolution, from the late 18th century through 19th century.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300008019",
        prefLabel: "cave architecture",
        scopeNote:
          'Refers to caves that are utilized, generally having been excavated or otherwise altered, for sheltering humans or animals, or for use as storage, worship, or another use. This term may overlap in meaning with "rock-cut architecture," but cave architecture is not necessarily rock-cut, and rock-cut architecture is not necessarily designed around a cave.',
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300106447",
        prefLabel: "Chinese architecture styles",
        scopeNote: "Architecture styles belonging to Chinese cultures.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300007466",
        prefLabel: "churches (buildings)",
        scopeNote:
          "Buildings for public Christian worship that are distinguished historically from chapels and oratories, which are buildings that are in some respect private, or not public in the widest sense. Church architecture generally somewhat follows standard models, which vary depending upon the date, location, and characteristics of the congregation.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300000289",
        prefLabel: "cluster housing",
        scopeNote:
          "Dwellings grouped closely together to form relatively compact units, with the space between clusters usually allocated to pedestrian circulation and cooperative recreational use.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300018110",
        prefLabel: "Colonial Latin American architecture styles",
        scopeNote:
          "Architectural styles belonging to Colonial Latin American cultures.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300005147",
        prefLabel: "commercial buildings",
        scopeNote:
          'Use broadly to refer to buildings associated with any aspect of the various activities and business relationships of industry and trade; when referring to structures associated with the purchase, sale, or exchange of goods in business, use "mercantile buildings."',
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300451032",
        prefLabel: "domestic architecture",
        scopeNote:
          "Built works used for personal or family purposes, in contrast to architecture used for commercial purposes.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300444302",
        prefLabel: "Dutch Colonial Revival",
        scopeNote:
          "Architectural styles inspired by Dutch architecture, primarily in North America, Europe, and areas of Dutch colonization.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300107022",
        prefLabel: "Dutch Colonial",
        scopeNote:
          "Refers to the style of artistic production in Dutch colonies featuring a combination of Dutch and native characteristics.  Applied to architecture, the style refers especially to structures in South Africa and parts of North America featuring gambrel roofs, overhanging eaves, stepped gables, and brickwork.  It also describes furniture produced especially in the East Indies between 1602 and 1942 characterized by twisted legs or bed-posts, canework, and the use of native woods such as satinwood, teak, ebony, and calamander.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300379486",
        prefLabel: "earthen architecture",
        scopeNote:
          'Buildings and other architectural structures constructed wholly or primarily of earth. For engineering works, such as trenches, created in the earth, use "earthworks (engineering works)." For structures built on a hillside rather than into it, use "hillside architecture." For structures built under the surface of the ground, but not made primarily of earth, use "underground structures."',
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300067141",
        prefLabel: "fantastic architecture",
        scopeNote:
          "Architectural designs that are eccentric, outrageous, or unconventional, that jolt or excite the viewer, and that are generally characterized by an unusual juxtaposition of shapes or materials; may be spontaneously constructed, incomplete, or unbuilt.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300007967",
        prefLabel: "floating buildings",
        scopeNote:
          "Buildings designed with foundations floating in water or on platforms floating in water, rather than on foundations dug into the earth on dry land. Examples include houses with foundations on a river bottom constructed so that -- if the water level rises to flood stage -- the house and the foundation will float up with the water level; and various types of buildings constructed on floating platforms or islands in a body of water, such as a lake or sea.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300444299",
        prefLabel: "folk architecture",
        scopeNote:
          "General term for humbler built works such as dwellings, places of worship, barns, and other everyday structures that are used by ordinary inhabitants of smaller settlements, designed and built without the assistance of formally schooled and professionally trained architects. Folk architecture is generally utilitarian and conservative, reflecting the specific needs, unique solutions, and customs of the local community.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300106959",
        prefLabel: "French Medieval architecture styles",
        scopeNote: "Architecture styles belonging to French Medieval cultures.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300005866",
        prefLabel: "funerary buildings",
        scopeNote:
          "Buildings associated with pre-burial ceremonies or buildings for the dead erected at burial sites.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300417661",
        prefLabel: "garden design",
        scopeNote:
          "Discipline specializing in garden projects that are most often sited at a residence. Garden design is generally of smaller scale than landscape design, and may have defined boundaries.The practice differs from landscape architecture in the level of accreditation of the practitioner. For the discipline that requires licensed architects to design the use of outdoor space and the land, and that may include site planning, urban planning, park and recreation planning, garden design and historic preservation, use 'landscape architecture.'",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300106963",
        prefLabel: "German Medieval architecture styles",
        scopeNote: "Architecture styles belonging to German Medieval cultures.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300386813",
        prefLabel: "golf course architecture",
        scopeNote:
          "Architecture that focuses on the design, renovation, and remodeling of golf courses, which are large outdoor areas where the sport of golf is played, consisting of a teeing ground, fairway, rough, hazards, and a series of greens.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300006807",
        prefLabel: "grottoes",
        scopeNote:
          'Refers to artificially constructed garden features, common since the 16th century in French and English landscapes. A grotto is characterized by being an excavation or structure made to imitate a rocky cave, often adorned with shell-work, colorful stones, etc., and serving as a place of recreation or a cool retreat. For natural features, use "caves" or "caverns."',
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300008033",
        prefLabel: "hillside architecture",
        scopeNote:
          'Structures built on sloping sites, as on the sides of hills or mountains. For architecture built of earth or primarily into the earth, prefer "earthen architecture." For architecture created from caves, prefer "cave architecture."',
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300018966",
        prefLabel: "Indian architecture styles",
        scopeNote: "Architecture styles belonging to Indian cultures. ",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300444298",
        prefLabel: "indigenous architecture",
        scopeNote:
          "Built works produced by the original inhabitants of an area, as contrasted to works produced by descendents of colonists to the area.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300006231",
        prefLabel: "industrial buildings",
        scopeNote:
          "Refers to buildings or groups of buildings intended to house the machinery and activities associated with modern industry and machine manufacture that arose after the Industrial Revolution, beginning in the mid-19th century.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300395660",
        prefLabel: "interior architecture (discipline)",
        scopeNote:
          'Discipline that focuses on the arrangement and layout of spaces and architectural elements inside architectural structures or parts of structures. For the discipline that focuses on the placement of moveable works located within the space, such as furniture or accessories, and often also on the design of the space itself, prefer "interior design." For the discipline focusing more on the flow of users of the space, building codes, etc., prefer "space planning." ',
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300391239",
        prefLabel: "interior architecture (object genre)",
        scopeNote:
          "The arrangement and layout of spaces inside architectural structures or parts of structures that are the result of conscious construction, are of practical use, are relatively stable and permanent. The term typically excludes the moveable works located within the space, such as furniture or accessories.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300018571",
        prefLabel: "Japanese architecture styles",
        scopeNote: "Architecture styles belonging to Japanese culture. ",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300054157",
        prefLabel: "landscape architecture (discipline)",
        scopeNote:
          'Branch of architecture concerning the design of the scenic environment, including the development and planting of all types of planned outdoor green spaces, often with accompanying structures and roadways, outdoor public areas, landmarks, and structures with the aim of creating a natural setting for human structures and settlements. For the planning discipline concerned with the physical environment and any and all human involvement with it, with the objective of assuring proper habitat for people, animals, and plants and the resources on which they depend, use "environmental design." For the development and decorative planting of gardens and grounds in particular, use "landscape gardening."',
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300417326",
        prefLabel: "landscape architecture (work genre)",
        scopeNote:
          "Genre of works that includes the man-made scenic environment, planned outdoor green spaces, often with accompanying structures and roadways, outdoor public areas, landmarks, and structures with the aim of creating a natural setting for human structures and settlements. ",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300386171",
        prefLabel: "landscape architecture firms",
        scopeNote:
          "Firms who practice the branch of architecture that deals with the design of the scenic environment, including the development and planting of all types of planned outdoor green spaces, often with accompanying structures and roadways, outdoor public areas, landmarks, and structures with the aim of creating a natural setting for human structures and settlements.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300006824",
        prefLabel: "libraries (buildings)",
        scopeNote:
          "Buildings set apart to contain books for reading, study, or reference, typically with shelves containing books and tables and seating for users of the library.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300017081",
        prefLabel: "Maya area architecture styles",
        scopeNote: "Styles of architecture belonging to the Maya area culture.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300444312",
        prefLabel: "Mediterranean Revival",
        scopeNote:
          "Architectural style that references the Spanish Renaissance, Spanish Colonial, Italian Renaissance, Venetian Gothic, French Colonial, Beaux-Arts, and Arabic Andalusian architecture. It focused heavily on the style of palaces and villas. It flourished in the United States from 1890s through 1930s.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300259277",
        prefLabel: "Metabolism (movement)",
        scopeNote:
          "Japanese architectural movement of the 1960s and 1970s, dedicated to urban-scale issues based on biologic principles of dynamic growth and change.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300451042",
        prefLabel: "military architecture",
        scopeNote:
          "Strategically positioned architecture at the service of national defence. The structures serve the functional purpose of manning weaponry and maintaining military communication and transport routes.The shape of these buildings changes according to the military technology of a period.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300006887",
        prefLabel: "military buildings",
        scopeNote: "Structures built and used by military forces.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300148722",
        prefLabel: "military engineering",
        scopeNote:
          "Art and practice of designing and building military fortifications and other installations, and building and maintaining lines of military communication and transportation. It includes providing utilities such as water and power to combat armies, design and construction of facilities to transport armies and weapons, particularly heavy artillery, the use or neutralization of conventional explosives, development of topographical maps and engineering intelligence, and the development of equipment necessary to carry out these operations.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300108361",
        prefLabel: "mimetic buildings",
        scopeNote:
          "Buildings that physically illustrate their name or function in their plan or elevation, for example a dairy stand shaped like a milk bottle.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300005768",
        prefLabel: "museums (buildings)",
        scopeNote:
          "Refers to buildings, groups of buildings, or spaces within buildings where objects of value such as works of art, antiquities, scientific specimens, or other artifacts are housed and displayed for public benefit.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300054159",
        prefLabel: "naval architecture",
        scopeNote:
          "Art or science of designing and building ships and other waterborne craft.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300056452",
        prefLabel: "organic architecture",
        scopeNote:
          "A philosophy of architectural design, emerging in the early 20th century, asserting that in structure and appearance a building should be based on organic forms and should harmonize with its natural environment.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300451690",
        prefLabel: "palm leaf architecture (construction technique)",
        scopeNote:
          "Construction technique using palm fronds and other parts of the palm, sometimes with materials from other plants. Examples are the structures made from date palms in the Middle East.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300069390",
        prefLabel: "participatory design",
        scopeNote:
          "Participation by workers and residents in the design of the spaces, structures, or communities which they use or inhabit.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300056460",
        prefLabel: "primitive architecture",
        scopeNote:
          'An outdated designation formerly used for the architecture of certain people considered to be outside the spheres of influence of other, politically dominant cultural groups; was used especially concerning communities in sub-Saharan Africa, the Pacific Islands, and native tribal groups throughout the Americas. Use instead other terms, such as "vernacular architecture," or use the most specific name known for the culture of origin.',
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300008059",
        prefLabel: "public buildings (governmental buildings)",
        scopeNote:
          "Buildings or groups of buildings owned and operated by a governing body, carrying out official duties, and often occupied by a governmental agency.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300418052",
        prefLabel: "reconstructed architecture",
        scopeNote:
          "Built works that have been damaged, lost, or destroyed, then built or heavily restored at a later time according to the same design, usually but not always on the original site. Includes built works that have been physically reconstructed, as well as the subject matter of drawings, models, or other media illustrating a surmised reconstruction.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300007391",
        prefLabel: "religious buildings",
        scopeNote:
          "Buildings built or used for religious ceremonies or other functions having to do with a particular religion.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300456824",
        prefLabel: "relocated architecture",
        scopeNote:
          "Built works or other structures that have been moved from one location to another.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300021158",
        prefLabel: "Renaissance-Baroque architecture styles",
        scopeNote:
          "Architecture styles belonging to Renaissance-Baroque cultures.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300257729",
        prefLabel: "residential structures",
        scopeNote:
          "Built works that provide shelter and accomodations for the basic physical functions of life for an individual or family; may also include spaces for dependents animals. Among the functions provided for are a place to sleep, prepare food, eat, and sometimes to work, usually having doors, windows, or other sources of light and with protection from the weather.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300008031",
        prefLabel: "rock-cut architecture",
        scopeNote:
          'Refers to structures excavated into living rock. This term may overlap in meaning with "cave architecture," but cave architecture is not necessarily rock-cut, and rock-cut architecture is not necessarily designed around a cave.',
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300444297",
        prefLabel: "spontaneous architecture",
        scopeNote:
          "Built works, particularly in a modern urban environment, that have emerged from anonymous creators, inspired by the desire to build things or to modify and personalize space. Spontaneous architecture is communal and social, often exploring non-traditional construction materials and with immediate technology.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300266044",
        prefLabel: "sustainable architecture",
        scopeNote:
          "Structure design that is specifically environmentally conscious, taking into account construction methods and materials that are locally available as well as the building's efficient use of resources, including systems of heating, cooling, power, water, and waste. Provides affordable, adequate shelter with minimal negative effect on the local and global environment; may be replicated and locally maintained.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300165202",
        prefLabel: "temporary buildings",
        scopeNote:
          "Structures, generally enclosed, that are used or intended to be used for sheltering an activity or occupancy, and that are intended to be non-permanent.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300068483",
        prefLabel: "vernacular architecture",
        scopeNote:
          "Broad term for any architecture built of local materials to suit particular local needs, generally constructed outside any academic tradition and without professional guidance. It is often of unknown authorship and makes little reference to established styles or theories of architecture. Most architectural works in the world are vernacular architecture.",
        source: "Art & Architecture Thesaurus",
      },
      {
        uri: "http://vocab.getty.edu/aat/300072496",
        prefLabel: "visionary architecture",
        scopeNote:
          "Designs that are rhetorical, reflecting a theoretical or speculative architectural position on social or political issues, often considered ahead of their time, and usually not intended to be carried out; often applied, but not necessarily restricted, to designs by certain French architects of the late 18th and early 19th centuries.",
        source: "Art & Architecture Thesaurus",
      },
    ],
  };
  const handleSearch = (e: FormEvent) => {
    // TODO: Fix the actual API call
    // if (!value || value.trim() === "") {
    //   alert("Voer een geldige zoekterm in.");
    //   return;
    // }
    //
    // if (!session.info.isLoggedIn) {
    //   alert("Je moet ingelogd zijn om termen te zoeken.");
    //   return;
    // }
    //
    // // Implement search logic here
    // session.fetch('http://localhost:8080/api/sources/recommend', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ userQuery: value })
    // })

    e.preventDefault();
    setSearchData(mockSourcesData);
    // router.push('/account/termen/results');
  };

  return (
    <>
      <AccountNavigation />
      <TermsHero title="Mijn termen" />
      <TermsSearch searchCallback={handleSearch} />

      {searchData ? <SearchResults results={searchData.terms} /> : null}
    </>
  );
}
