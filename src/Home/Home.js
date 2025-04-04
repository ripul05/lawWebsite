const internationalTaxationImg = require('../img/internationalTaxation.png')

const HomePage = () => {
    return (
      <div style={{
        minHeight: '100vh',
        padding: '2rem',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        fontFamily: "'Poppins', sans-serif"
      }}>
        <div style={{
          display: 'flex',
          flexDirection: ['column', 'row'], // Responsive layout
          gap: '3rem',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '2rem',
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '25px',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          {/* Text Content */}
          <div style={{ flex: 1 }}>
            <h1 style={{
              fontSize: '3.5rem',
              background: 'linear-gradient(45deg, #6a11cb, #2575fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1.5rem',
              fontWeight: '800',
              letterSpacing: '-1px'
            }}>
              Global Tax Solutions
            </h1>
            
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.6',
              color: '#2d3436',
              marginBottom: '2rem',
              borderLeft: '4px solid #6a11cb',
              paddingLeft: '1.5rem'
            }}>
              Navigating the complex world of international taxation requires 
              expertise in bilateral agreements, cross-border regulations, 
              and strategic tax planning. Our solutions ensure compliance 
              while optimizing your global tax position.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <button style={{
                padding: '1rem 2rem',
                background: 'linear-gradient(45deg, #6a11cb, #2575fc)',
                border: 'none',
                borderRadius: '10px',
                color: 'white',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'transform 0.3s',
                ':hover': {
                  transform: 'translateY(-2px)'
                }
              }}>
                Explore Solutions
              </button>
              
              <button style={{
                padding: '1rem 2rem',
                background: 'transparent',
                border: '2px solid #6a11cb',
                borderRadius: '10px',
                color: '#6a11cb',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                ':hover': {
                  background: '#6a11cb',
                  color: 'white'
                }
              }}>
                Contact Experts
              </button>
            </div>
            
            {/* Funky Decorative Element */}
            <div style={{
              marginTop: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(45deg, #6a11cb, #2575fc)',
                borderRadius: '12px',
                transform: 'rotate(45deg)',
                animation: 'float 3s ease-in-out infinite'
              }}></div>
              <span style={{
                color: '#6a11cb',
                fontWeight: '600',
                textTransform: 'uppercase'
              }}>
                Tax Treaty Specialists
              </span>
            </div>
          </div>
  
          {/* Image Container */}
          <div style={{
            flex: 1,
            position: 'relative',
            padding: '1rem',
            background: 'linear-gradient(45deg, #6a11cb30, #2575fc30)',
            borderRadius: '20px'
          }}>
            <img 
              src={internationalTaxationImg} 
              alt="International Taxation" 
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
              }}
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default HomePage;

