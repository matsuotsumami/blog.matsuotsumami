import Script from 'next/script'

const VhSetProperty = () => {
  return (
    <Script id='vh-script'>
      {`
        const changeHight = () => {
          const vh = window.innerHeight * 0.01;
          document.documentElement.style.setProperty('--vh', \`\${vh}px\`);
        }
          
        window.addEventListener('resize', changeHight);

        changeHight();
      `}
    </Script>
  )
}

export default VhSetProperty
