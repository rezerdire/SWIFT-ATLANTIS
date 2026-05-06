 tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          barlow: ['Barlow', 'sans-serif'],
          condensed: ['"Barlow Condensed"', 'sans-serif'],
        },
        colors: {
          navy: '#0a1628',
          'navy-mid': '#112244',
          blue: '#1a6fc4',
          'blue-light': '#2589e8',
          sky: '#4fb3e8',
          steel: '#b8d4ea',
          gold: '#c9a84c',
          'gold-light': '#e8c96b',
          'gray-mid': '#8fa5b8',
          'gray-light': '#e8eef5',
          'text-dark': '#0d1e34',
          'text-body': '#2c3e52',
        },
        animation: {
          'fade-up-1': 'fadeUp 0.7s ease both 0.2s',
          'fade-up-2': 'fadeUp 0.7s ease both 0.4s',
          'fade-up-3': 'fadeUp 0.7s ease both 0.55s',
          'fade-up-4': 'fadeUp 0.7s ease both 0.7s',
          'fade-up-5': 'fadeUp 0.7s ease both 0.85s',
        },
        keyframes: {
          fadeUp: {
            from: { opacity: '0', transform: 'translateY(30px)' },
            to: { opacity: '1', transform: 'translateY(0)' },
          }
        },
        clipPath: {
          services: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)',
        }
      }
    }
  }