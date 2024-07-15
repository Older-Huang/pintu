import { readFile, writeFile } from "node:fs/promises";

const index = function () {
    
    return {
        name: 'insertStyle', 

        async generateBundle(options_, bundle) {
            try {
                const styleSheet = await readFile('./dist/style.css', { encoding: 'utf-8' });
                let indexJs = await readFile('./dist/index.js', { encoding: 'utf-8' });
                const insertFunc = `(function styleInject() {
                                        var css = \`${styleSheet}\`;
                                        if (!css || typeof document === 'undefined') { return; }
                                        var head = document.head || document.getElementsByTagName('head')[0];
                                        var style = document.createElement('style');
                                        style.type = 'text/css';
                                        head.appendChild(style);
                                        if (style.styleSheet) {
                                        style.styleSheet.cssText = css;
                                        } else {
                                        style.appendChild(document.createTextNode(css));
                                        }
                                    })();`
                const data = indexJs + insertFunc;
                await writeFile('./dist/index.js', data, { encoding: 'utf-8' });
            } catch (error) {
            }
        }
    };
}

export default index;
