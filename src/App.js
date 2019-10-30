import React from 'react';
import './App.css';
import github from './assets/GitHub-Mark/PNG/GitHub-Mark-32px.png'
import linkedin from './assets/LinkedIn-Logos/LI-Black.png'

function App() {
  return (
    <div className="App">
{/*       <header className="App-header">
        <p>Portofolio</p>
        <p>Contact</p>
      </header> */}
      <div className="intro">
      <a href=""> <svg id="logo" width="920" height="311" viewBox="0 0 920 311" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M69.4141 83.2812H26.5234L16.8906 110H2.96875L42.0625 7.625H53.875L93.0391 110H79.1875L69.4141 83.2812ZM30.6016 72.1719H65.4062L47.9688 24.2891L30.6016 72.1719Z" stroke="white" stroke-width="4"/>
            <path d="M117.086 33.9219L117.508 43.4844C123.32 36.1719 130.914 32.5156 140.289 32.5156C156.367 32.5156 164.477 41.5859 164.617 59.7266V110H151.609V59.6562C151.562 54.1719 150.297 50.1172 147.812 47.4922C145.375 44.8672 141.555 43.5547 136.352 43.5547C132.133 43.5547 128.43 44.6797 125.242 46.9297C122.055 49.1797 119.57 52.1328 117.789 55.7891V110H104.781V33.9219H117.086Z" stroke="white" stroke-width="4"/>
            <path d="M181.07 71.3281C181.07 59.6562 183.836 50.2812 189.367 43.2031C194.898 36.0781 202.141 32.5156 211.094 32.5156C220 32.5156 227.055 35.5625 232.258 41.6562V2H245.266V110H233.312L232.68 101.844C227.477 108.219 220.234 111.406 210.953 111.406C202.141 111.406 194.945 107.797 189.367 100.578C183.836 93.3594 181.07 83.9375 181.07 72.3125V71.3281ZM194.078 72.8047C194.078 81.4297 195.859 88.1797 199.422 93.0547C202.984 97.9297 207.906 100.367 214.188 100.367C222.438 100.367 228.461 96.6641 232.258 89.2578V54.3125C228.367 47.1406 222.391 43.5547 214.328 43.5547C207.953 43.5547 202.984 46.0156 199.422 50.9375C195.859 55.8594 194.078 63.1484 194.078 72.8047Z" stroke="white" stroke-width="4"/>
            <path d="M302.289 45.5938C300.32 45.2656 298.188 45.1016 295.891 45.1016C287.359 45.1016 281.57 48.7344 278.523 56V110H265.516V33.9219H278.172L278.383 42.7109C282.648 35.9141 288.695 32.5156 296.523 32.5156C299.055 32.5156 300.977 32.8438 302.289 33.5V45.5938Z" stroke="white" stroke-width="4"/>
            <path d="M344.477 111.406C334.164 111.406 325.773 108.031 319.305 101.281C312.836 94.4844 309.602 85.4141 309.602 74.0703V71.6797C309.602 64.1328 311.031 57.4062 313.891 51.5C316.797 45.5469 320.828 40.9062 325.984 37.5781C331.188 34.2031 336.812 32.5156 342.859 32.5156C352.75 32.5156 360.438 35.7734 365.922 42.2891C371.406 48.8047 374.148 58.1328 374.148 70.2734V75.6875H322.609C322.797 83.1875 324.977 89.2578 329.148 93.8984C333.367 98.4922 338.711 100.789 345.18 100.789C349.773 100.789 353.664 99.8516 356.852 97.9766C360.039 96.1016 362.828 93.6172 365.219 90.5234L373.164 96.7109C366.789 106.508 357.227 111.406 344.477 111.406ZM342.859 43.2031C337.609 43.2031 333.203 45.125 329.641 48.9688C326.078 52.7656 323.875 58.1094 323.031 65H361.141V64.0156C360.766 57.4062 358.984 52.2969 355.797 48.6875C352.609 45.0312 348.297 43.2031 342.859 43.2031Z" stroke="white" stroke-width="4"/>
            <path d="M436.234 110C435.484 108.5 434.875 105.828 434.406 101.984C428.359 108.266 421.141 111.406 412.75 111.406C405.25 111.406 399.086 109.297 394.258 105.078C389.477 100.812 387.086 95.4219 387.086 88.9062C387.086 80.9844 390.086 74.8438 396.086 70.4844C402.133 66.0781 410.617 63.875 421.539 63.875H434.195V57.8984C434.195 53.3516 432.836 49.7422 430.117 47.0703C427.398 44.3516 423.391 42.9922 418.094 42.9922C413.453 42.9922 409.562 44.1641 406.422 46.5078C403.281 48.8516 401.711 51.6875 401.711 55.0156H388.633C388.633 51.2188 389.969 47.5625 392.641 44.0469C395.359 40.4844 399.016 37.6719 403.609 35.6094C408.25 33.5469 413.336 32.5156 418.867 32.5156C427.633 32.5156 434.5 34.7188 439.469 39.125C444.438 43.4844 447.016 49.5078 447.203 57.1953V92.2109C447.203 99.1953 448.094 104.75 449.875 108.875V110H436.234ZM414.648 100.086C418.727 100.086 422.594 99.0312 426.25 96.9219C429.906 94.8125 432.555 92.0703 434.195 88.6953V73.0859H424C408.062 73.0859 400.094 77.75 400.094 87.0781C400.094 91.1562 401.453 94.3438 404.172 96.6406C406.891 98.9375 410.383 100.086 414.648 100.086Z" stroke="white" stroke-width="4"/>
            <path d="M511.891 89.8203C511.891 86.3047 510.555 83.5859 507.883 81.6641C505.258 79.6953 500.641 78.0078 494.031 76.6016C487.469 75.1953 482.242 73.5078 478.352 71.5391C474.508 69.5703 471.648 67.2266 469.773 64.5078C467.945 61.7891 467.031 58.5547 467.031 54.8047C467.031 48.5703 469.656 43.2969 474.906 38.9844C480.203 34.6719 486.953 32.5156 495.156 32.5156C503.781 32.5156 510.766 34.7422 516.109 39.1953C521.5 43.6484 524.195 49.3438 524.195 56.2812H511.117C511.117 52.7188 509.594 49.6484 506.547 47.0703C503.547 44.4922 499.75 43.2031 495.156 43.2031C490.422 43.2031 486.719 44.2344 484.047 46.2969C481.375 48.3594 480.039 51.0547 480.039 54.3828C480.039 57.5234 481.281 59.8906 483.766 61.4844C486.25 63.0781 490.727 64.6016 497.195 66.0547C503.711 67.5078 508.984 69.2422 513.016 71.2578C517.047 73.2734 520.023 75.7109 521.945 78.5703C523.914 81.3828 524.898 84.8281 524.898 88.9062C524.898 95.7031 522.18 101.164 516.742 105.289C511.305 109.367 504.25 111.406 495.578 111.406C489.484 111.406 484.094 110.328 479.406 108.172C474.719 106.016 471.039 103.016 468.367 99.1719C465.742 95.2812 464.43 91.0859 464.43 86.5859H477.438C477.672 90.9453 479.406 94.4141 482.641 96.9922C485.922 99.5234 490.234 100.789 495.578 100.789C500.5 100.789 504.438 99.8047 507.391 97.8359C510.391 95.8203 511.891 93.1484 511.891 89.8203Z" stroke="white" stroke-width="4"/>
            <path d="M50.4297 237.586H26.3828V279H12.8125V176.625H46.7031C58.2344 176.625 67.0938 179.25 73.2812 184.5C79.5156 189.75 82.6328 197.391 82.6328 207.422C82.6328 213.797 80.8984 219.352 77.4297 224.086C74.0078 228.82 69.2266 232.359 63.0859 234.703L87.1328 278.156V279H72.6484L50.4297 237.586ZM26.3828 226.547H47.125C53.8281 226.547 59.1484 224.812 63.0859 221.344C67.0703 217.875 69.0625 213.234 69.0625 207.422C69.0625 201.094 67.1641 196.242 63.3672 192.867C59.6172 189.492 54.1797 187.781 47.0547 187.734H26.3828V226.547Z" stroke="white" stroke-width="4"/>
            <path d="M113.711 279H100.703V202.922H113.711V279ZM99.6484 182.742C99.6484 180.633 100.281 178.852 101.547 177.398C102.859 175.945 104.781 175.219 107.312 175.219C109.844 175.219 111.766 175.945 113.078 177.398C114.391 178.852 115.047 180.633 115.047 182.742C115.047 184.852 114.391 186.609 113.078 188.016C111.766 189.422 109.844 190.125 107.312 190.125C104.781 190.125 102.859 189.422 101.547 188.016C100.281 186.609 99.6484 184.852 99.6484 182.742Z" stroke="white" stroke-width="4"/>
            <path d="M146.828 202.922L147.18 211.359C152.758 204.797 160.281 201.516 169.75 201.516C180.391 201.516 187.633 205.594 191.477 213.75C194.008 210.094 197.289 207.141 201.32 204.891C205.398 202.641 210.203 201.516 215.734 201.516C232.422 201.516 240.906 210.352 241.188 228.023V279H228.18V228.797C228.18 223.359 226.938 219.305 224.453 216.633C221.969 213.914 217.797 212.555 211.938 212.555C207.109 212.555 203.102 214.008 199.914 216.914C196.727 219.773 194.875 223.641 194.359 228.516V279H181.281V229.148C181.281 218.086 175.867 212.555 165.039 212.555C156.508 212.555 150.672 216.188 147.531 223.453V279H134.523V202.922H146.828Z" stroke="white" stroke-width="4"/>
            <path d="M257.43 240.258C257.43 232.805 258.883 226.102 261.789 220.148C264.742 214.195 268.82 209.602 274.023 206.367C279.273 203.133 285.25 201.516 291.953 201.516C302.312 201.516 310.68 205.102 317.055 212.273C323.477 219.445 326.688 228.984 326.688 240.891V241.805C326.688 249.211 325.258 255.867 322.398 261.773C319.586 267.633 315.531 272.203 310.234 275.484C304.984 278.766 298.938 280.406 292.094 280.406C281.781 280.406 273.414 276.82 266.992 269.648C260.617 262.477 257.43 252.984 257.43 241.172V240.258ZM270.508 241.805C270.508 250.242 272.453 257.016 276.344 262.125C280.281 267.234 285.531 269.789 292.094 269.789C298.703 269.789 303.953 267.211 307.844 262.055C311.734 256.852 313.68 249.586 313.68 240.258C313.68 231.914 311.688 225.164 307.703 220.008C303.766 214.805 298.516 212.203 291.953 212.203C285.531 212.203 280.352 214.758 276.414 219.867C272.477 224.977 270.508 232.289 270.508 241.805Z" stroke="white" stroke-width="4"/>
            <path d="M357.133 279H344.125V171H357.133V279Z" stroke="white" stroke-width="4"/>
            <path d="M422.312 258.82C422.312 255.305 420.977 252.586 418.305 250.664C415.68 248.695 411.062 247.008 404.453 245.602C397.891 244.195 392.664 242.508 388.773 240.539C384.93 238.57 382.07 236.227 380.195 233.508C378.367 230.789 377.453 227.555 377.453 223.805C377.453 217.57 380.078 212.297 385.328 207.984C390.625 203.672 397.375 201.516 405.578 201.516C414.203 201.516 421.188 203.742 426.531 208.195C431.922 212.648 434.617 218.344 434.617 225.281H421.539C421.539 221.719 420.016 218.648 416.969 216.07C413.969 213.492 410.172 212.203 405.578 212.203C400.844 212.203 397.141 213.234 394.469 215.297C391.797 217.359 390.461 220.055 390.461 223.383C390.461 226.523 391.703 228.891 394.188 230.484C396.672 232.078 401.148 233.602 407.617 235.055C414.133 236.508 419.406 238.242 423.438 240.258C427.469 242.273 430.445 244.711 432.367 247.57C434.336 250.383 435.32 253.828 435.32 257.906C435.32 264.703 432.602 270.164 427.164 274.289C421.727 278.367 414.672 280.406 406 280.406C399.906 280.406 394.516 279.328 389.828 277.172C385.141 275.016 381.461 272.016 378.789 268.172C376.164 264.281 374.852 260.086 374.852 255.586H387.859C388.094 259.945 389.828 263.414 393.062 265.992C396.344 268.523 400.656 269.789 406 269.789C410.922 269.789 414.859 268.805 417.812 266.836C420.812 264.82 422.312 262.148 422.312 258.82Z" stroke="white" stroke-width="4"/>
            <path d="M489.039 214.594C487.07 214.266 484.938 214.102 482.641 214.102C474.109 214.102 468.32 217.734 465.273 225V279H452.266V202.922H464.922L465.133 211.711C469.398 204.914 475.445 201.516 483.273 201.516C485.805 201.516 487.727 201.844 489.039 202.5V214.594Z" stroke="white" stroke-width="4"/>
            <path d="M497.617 240.258C497.617 232.805 499.047 226.125 501.906 220.219C504.812 214.266 508.891 209.672 514.141 206.438C519.438 203.156 525.438 201.516 532.141 201.516C537.297 201.516 542.078 202.5 546.484 204.469L551.617 194.062H560.336L553.164 208.477C562.305 215.695 566.875 226.805 566.875 241.805C566.875 249.211 565.422 255.891 562.516 261.844C559.609 267.797 555.531 272.391 550.281 275.625C545.031 278.812 539.031 280.406 532.281 280.406C527.406 280.406 522.953 279.586 518.922 277.945L513.719 288.422H505L512.031 274.148C502.422 267.164 497.617 255.867 497.617 240.258ZM510.625 241.805C510.625 250.898 512.898 258.047 517.445 263.25L541.562 214.453C538.656 212.953 535.516 212.203 532.141 212.203C525.672 212.203 520.469 214.758 516.531 219.867C512.594 224.977 510.625 232.289 510.625 241.805ZM553.797 240.258C553.797 231.727 551.758 224.859 547.68 219.656L523.773 268.031C526.352 269.203 529.188 269.789 532.281 269.789C538.797 269.789 544 267.234 547.891 262.125C551.828 256.969 553.797 250.055 553.797 241.383V240.258Z" stroke="white" stroke-width="4"/>
            <path d="M594.93 202.922L595.352 212.484C601.164 205.172 608.758 201.516 618.133 201.516C634.211 201.516 642.32 210.586 642.461 228.727V279H629.453V228.656C629.406 223.172 628.141 219.117 625.656 216.492C623.219 213.867 619.398 212.555 614.195 212.555C609.977 212.555 606.273 213.68 603.086 215.93C599.898 218.18 597.414 221.133 595.633 224.789V279H582.625V202.922H594.93Z" stroke="white" stroke-width="4"/>
            <path d="M674.383 202.922L674.805 212.484C680.617 205.172 688.211 201.516 697.586 201.516C713.664 201.516 721.773 210.586 721.914 228.727V279H708.906V228.656C708.859 223.172 707.594 219.117 705.109 216.492C702.672 213.867 698.852 212.555 693.648 212.555C689.43 212.555 685.727 213.68 682.539 215.93C679.352 218.18 676.867 221.133 675.086 224.789V279H662.078V202.922H674.383Z" stroke="white" stroke-width="4"/>
            <path d="M755.664 279H742.656V202.922H755.664V279ZM741.602 182.742C741.602 180.633 742.234 178.852 743.5 177.398C744.812 175.945 746.734 175.219 749.266 175.219C751.797 175.219 753.719 175.945 755.031 177.398C756.344 178.852 757 180.633 757 182.742C757 184.852 756.344 186.609 755.031 188.016C753.719 189.422 751.797 190.125 749.266 190.125C746.734 190.125 744.812 189.422 743.5 188.016C742.234 186.609 741.602 184.852 741.602 182.742Z" stroke="white" stroke-width="4"/>
            <path d="M788.852 202.922L789.273 212.484C795.086 205.172 802.68 201.516 812.055 201.516C828.133 201.516 836.242 210.586 836.383 228.727V279H823.375V228.656C823.328 223.172 822.062 219.117 819.578 216.492C817.141 213.867 813.32 212.555 808.117 212.555C803.898 212.555 800.195 213.68 797.008 215.93C793.82 218.18 791.336 221.133 789.555 224.789V279H776.547V202.922H788.852Z" stroke="white" stroke-width="4"/>
            <path d="M852.906 240.328C852.906 228.469 855.648 219.047 861.133 212.062C866.617 205.031 873.883 201.516 882.93 201.516C892.211 201.516 899.453 204.797 904.656 211.359L905.289 202.922H917.172V277.172C917.172 287.016 914.242 294.773 908.383 300.445C902.57 306.117 894.742 308.953 884.898 308.953C879.414 308.953 874.047 307.781 868.797 305.438C863.547 303.094 859.539 299.883 856.773 295.805L863.523 288C869.102 294.891 875.922 298.336 883.984 298.336C890.312 298.336 895.234 296.555 898.75 292.992C902.312 289.43 904.094 284.414 904.094 277.945V271.406C898.891 277.406 891.789 280.406 882.789 280.406C873.883 280.406 866.664 276.82 861.133 269.648C855.648 262.477 852.906 252.703 852.906 240.328ZM865.984 241.805C865.984 250.383 867.742 257.133 871.258 262.055C874.773 266.93 879.695 269.367 886.023 269.367C894.227 269.367 900.25 265.641 904.094 258.188V223.453C900.109 216.188 894.133 212.555 886.164 212.555C879.836 212.555 874.891 215.016 871.328 219.938C867.766 224.859 865.984 232.148 865.984 241.805Z" stroke="white" stroke-width="4"/>
            </svg></a>
            
            <div className="info">
              <h1>Pursuing a B.Sc. in Informatics <br></br>@<br></br> NTNU</h1>
            </div>
            </div>
            <a class="pointer south" href="#art">V</a>
      <div className="content">
        <div className="heading">
          <h1>Projects</h1>
          <p>Not much to see here</p>
        </div>
      </div>
      <div className="contact">
        <img src={github} alt="Github"></img>
        <img id="linkedin" src={linkedin} alt="Linkedin"></img>
        <a>Linkedin</a>
        <a>Github</a>
        <a>Email</a>
      </div>
    </div>
  );
}

export default App;
