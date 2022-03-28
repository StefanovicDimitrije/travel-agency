const features = [
    {
      name: 'Fast and modern travel',
      description:
        'With us you travel with only the best and most modern air travel providers.',
      icon: "ri-send-plane-fill",
    },
    {
      name: 'No extra planing needed!',
      description:
        'Our experts have already planned everything for you. Its on you, now, to pack your bags and get ready for a journey',
      icon: "ri-passport-line",
    },
    {
      name: 'Newest technologies secure your data',
      description:
        'We only use the latest and greatest technologies for our site, transactions and reservations so you can rest easy knowing that your data is in the right hands',
      icon: "ri-lock-unlock-line",
    },
    {
      name: 'Last minute? No problem!',
      description:
        'With our services you can find and reserve your spot on your dream vacation even if it is only a few days away.',
      icon: "ri-timer-line",
    },
  ]

export default function About(){
    return(
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-700 font-semibold tracking-wide uppercase">About us</h2>
          <p className="mt-2 text-3xl leading-8 tracking-tight text-gray-700 sm:text-4xl">
            A better way to spend your vacation
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Stefanovic Travels Agency is an air travel agency founded in 2021. Stefanovic Travels Agency is part of the fastest growing tourism group in the region, ITK Travel Group, which operates in 9 countries, through 15 branches and a wide network of subagents and associates.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-700 text-white">
                    <i className={feature.icon + " text-xl"}></i> 
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    )
}