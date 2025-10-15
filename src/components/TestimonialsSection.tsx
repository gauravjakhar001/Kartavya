import { cn } from "@/lib/utils";
// import { Marquee } from "@/components/magicui/marquee";
import Marquee from 'react-fast-marquee';
import { DotPattern } from "@/components/magicui/dot-pattern";
import { AuroraText } from "@/components/magicui/aurora-text";
import { TextAnimate } from "@/components/magicui/text-animate";


const reviews = [
  {
    quote: "Their technical depth in AI and architecture is unmatched. The team quickly understood our vision and built a scalable solution that exceeded expectations.",
    name: "Nitin Agrawal",
    title: "Founder, Terrabiz",
    project: "AI-Powered Staff Analytics Platform",
    img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    quote: "Working with Kartavya felt like having our own tech co-founder. Their vCTO service gave us the clarity and structure our product lacked.",
    name: "Geeta Mehta",
    title: "COO, Sketch Consultancy",
    project: "Customer Support Automation",
    img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    quote: "We needed a school platform that was easy to use and cost-effective. Kartavya delivered exactly what we asked for — on time, and with personal attention",
    name: "Nidhi Chaudhary",
    title: "Founder, Quest Digital School",
    project: "RAG Implementation",
    img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    quote: "Kartavya Technology helped us automate our internal operations using AI agents — saving over 30% of manual effort within 6 weeks of deployment.",
    name: "Prem Tripathy",
    title: "Founder, WholeWood Furniture",
    project: "RAG Implementation",
    img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    quote: "Their AI-powered support agents helped us respond to customer queries 24/7 with minimal intervention. Impressive turnaround and reliable support.",
    name: "Micheal Chen",
    title: "Founder, StoryTent",
    project: "RAG Implementation",
    img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    quote: "Thanks to Kartavya, our idea went from concept to live mobile app in less than 5 weeks. Very responsive team and solid engineering practices",
    name: "Vinod Goveas",
    title: "Founder, MemeMotions",
    project: "RAG Implementation",
    img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    quote: "The open-source mindset at Kartavya gave us full control and flexibility. We now run an in-house system built by them, with no vendor lock-in",
    name: "Darshan Mahajan",
    title: "CTO, StaffStream",
    project: "RAG Implementation",
    img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    quote: "What stood out was their business understanding. They not only built the solution but helped us reimagine how tech could improve our workflow.",
    name: "Hitesh Agarwal",
    title: "Operations Head, LyfStyle Pvt Ltd",
    project: "RAG Implementation",
    img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    quote: "Their solution architect was instrumental in helping us scale our cloud infrastructure. We now manage more traffic with 40% lower AWS spend.",
    name: "Arvind Rangarajan",
    title: "Founder, Artfine",
    project: "RAG Implementation",
    img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    quote: "Dharam and his team go beyond the brief. They proactively suggested improvements, and their ownership made them feel like an extension of our team.",
    name: "Gaurav Saxena ",
    title: "Founder, Inferex Pvt Ltd",
    project: "RAG Implementation",
    img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  }
  
];
 
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  title,
  quote,
  project,
}: {
  img: string;
  name: string;
  title: string;
  quote: string;
  project: string;
}) => {
  return (
    <figure
  className={cn(
    "relative border-[1px] shadow-lg shadow-[#2a2a2a] my-5 border-[#737373] h-40 min-w-[300px] max-w-[400px] flex-shrink-0 cursor-pointer overflow-hidden rounded-xl p-4"
  )}
    >
       <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{title}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm font-thin text-zinc-200">{quote}</blockquote>
      {/* <blockquote className="mt-2 text-sm font-thin text-primary">Project : {project}</blockquote> */}
    </figure>
  );
};


const TestimonialsSection = () => {
  return (
      <section id="testimonials" className="py-20 md:px-10 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                      What Our <AuroraText>Clients</AuroraText> Say
                  </h2>
                  <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground">
                      <TextAnimate
                          animation="blurIn"
                          as="h1"
                          delay={1}
                          duration={1.5}
                      >
                          Hear from business leaders who have partnered with us.
                      </TextAnimate>
                  </p>
              </div>

              {/* Scrolling Cards */}
              <div className="relative  w-full overflow-hidden">
                  <Marquee pauseOnHover className="[--duration:20s] w-full">
                      {firstRow.map((review) => (
                          <div
                              key={review.title}
                              className="mx-2  flex-shrink-0"
                          >
                              <ReviewCard {...review} />
                          </div>
                      ))}
                  </Marquee>
                  <Marquee
                      pauseOnHover
                      className="[--duration:20s] w-full"
                      direction="right"
                  >
                      {secondRow.map((review) => (
                          <div
                              key={review.title}
                              className="mx-2 flex-shrink-0"
                          >
                              <ReviewCard {...review} />
                          </div>
                      ))}
                  </Marquee>
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-background z-10" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-background z-10" />
              </div>
          </div>
      </section>
  );
};

export default TestimonialsSection;
