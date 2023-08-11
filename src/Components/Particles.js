import Particles from "react-tsparticles";
import { useContext,useLayoutEffect,useState,useCallback } from "react";
import particlesConfig from "./particles-configLight";
import particlesConfigDark from "./particles-configDark"
import { loadFull } from "tsparticles";
import { ThemeContext } from "../context/context";
export default function Particle() {
	const particlesInit = useCallback(async (engine) => {
		console.log(engine);
		await loadFull(engine);
	  }, []);
	const { toggle } = useContext(ThemeContext);
	const [particles, setParticles] = useState(particlesConfig);
  useLayoutEffect(() => {
	console.log(toggle);
    if (toggle) {
        setParticles(particlesConfigDark);
	}
	else{
        setParticles(particlesConfig);
    }
  }, [toggle]);
	return (
		<Particles
			options={particles}
			id="tsparticles"
			init={particlesInit}
		/>
	);
}