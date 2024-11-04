import { exec } from 'child_process';
import {dynamicClass} from "./codePattern";

const args = process.argv.slice(2)
export const formateddArgs = args[0].replace("--", "");


let removeTrailingS: string | undefined = undefined;

export function getFormattedArgs() {
    const args = process.argv.slice(2);
    const formateddArgs = args[0].replace("--", "");

    if (formateddArgs.endsWith("s")) {
    	removeTrailingS = formateddArgs.slice(0, -1);
		return removeTrailingS;
    } else {
        throw new Error("O nome do arquivo deve ser no plural");
    }
}

getFormattedArgs();

const command = `cd src/useCases && mkdir ${formateddArgs} && cd ./${formateddArgs} && mkdir validate && touch ${removeTrailingS}Controller.ts && touch ${removeTrailingS}Service.ts && touch ${removeTrailingS}Interface.ts`

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`erro: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`erro padrão: ${stderr}`);
        return;
    }
});
        

