import type { App } from 'vue';
import Jigsaw from '@/packages/Jigsaw.vue';

Jigsaw.install = function(app: App) {
    app.component(Jigsaw.name as string, Jigsaw)
}

export { Jigsaw };

declare module 'vue' {
    export interface GlobalComponents {
        Jigsaw: typeof Jigsaw
    }
}

export default Jigsaw;
