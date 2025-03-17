
function Partners() {
    const partners = [
        { name: "Microsoft", logo: "/placeholder.svg?height=60&width=120" },
        { name: "AWS", logo: "/placeholder.svg?height=60&width=120" },
        { name: "Google Cloud", logo: "/placeholder.svg?height=60&width=120" },
        { name: "Salesforce", logo: "/placeholder.svg?height=60&width=120" },
        { name: "Zendesk", logo: "/placeholder.svg?height=60&width=120" },
        { name: "HubSpot", logo: "/placeholder.svg?height=60&width=120" },
      ]
    return (
        <div className="mt-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Integration Partners</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our solutions integrate seamlessly with your existing technology stack.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    )}

    export default Partners;