import {
  GraduationCap,
  Briefcase,
  Building2,
  Users,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const personas = [
  {
    icon: GraduationCap,
    title: "Young Professionals",
    description:
      "Early-career individuals looking to start their investment journey with minimal capital",
    benefit: "Start building wealth early with as little as R100",
  },
  {
    icon: Briefcase,
    title: "Business Owners",
    description:
      "Entrepreneurs seeking to diversify their investments across different sectors",
    benefit: "Access vetted opportunities in high-growth African markets",
  },
  {
    icon: Building2,
    title: "Investment Groups",
    description:
      "Chamas and investment clubs looking for structured investment opportunities",
    benefit: "Pool resources and invest collectively in larger projects",
  },
  {
    icon: Users,
    title: "Diaspora Investors",
    description: "Africans abroad wanting to invest back home with confidence",
    benefit: "Secure, transparent way to invest in African opportunities",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Fractional Ownership",
    description:
      "Break down large investments into affordable units, allowing you to start small and grow over time",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Transparent",
    description:
      "Blockchain technology ensures your investments are secure, traceable, and transparent",
  },
];

const UseCases = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">
            Who is ChanuaBlock For?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Join thousands of African investors building wealth through
            blockchain-powered investments
          </p>
        </div>

        {/* Personas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {personas.map((persona, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            >
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <persona.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {persona.title}
              </h3>
              <p className="text-gray-600 mb-4">{persona.description}</p>
              <div className="text-sm font-medium text-blue-600">
                {persona.benefit}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
