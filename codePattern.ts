import { getFormattedArgs } from "./script";


const formateddArgs = getFormattedArgs();
const nameClasse = formateddArgs.charAt(0).toUpperCase() + formateddArgs.slice(1);


export const dynamicClass = `
    class ${nameClasse}Service implements I${nameClasse}Service {
        private readonly props: I nameClasse}ServiceProps;

        constructor(props: I${nameClasse}ServiceProps) {
            this.props = props;
        }
    }
`;
