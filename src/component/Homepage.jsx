import GridScan from "./Background";
import InviteForm from "./InviteForm";
import { TextType } from './CustomText'

const HomePage = () => {
    return (
        <div className="homepage" style={{ width: '100%', minHeight: '800px', position: 'relative', overflow: 'hidden', alignContent: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* BACKGROUND Grainient */}
            <div style={{ width: '100%', height: '800px', position: 'absolute', zIndex: 1 ,inset: 0}}>
                <GridScan
                    sensitivity={0.55}
                    lineThickness={1}
                    linesColor="#392e4e"
                    gridScale={0.1}
                    scanColor="#00aeff"
                    scanOpacity={0.4}
                    enablePost
                    bloomIntensity={0.6}
                    chromaticAberration={0.002}
                    noiseIntensity={0.01}
                />
            </div>
            <div
                style={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    minHeight: '60vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '2rem',
                    color: 'white',
                }}
            >
                <div>
                    <TextType
                        text={"Sei pront* all'evento dell'anno?"}
                        typingSpeed={75}
                        pauseDuration={15000}
                        showCursor={true}
                        cursorCharacter="_"
                        className="h2"
                    />
                </div>
                <div>
                    <InviteForm />
                </div>
            </div>

        </div>
    );
};

export default HomePage;