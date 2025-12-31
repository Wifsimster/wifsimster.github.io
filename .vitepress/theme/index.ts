import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './custom.css'

// #region agent log
fetch('http://127.0.0.1:7244/ingest/25df5bb8-6b26-448f-93cb-c2dbf83f83f2',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'theme/index.ts:10',message:'Theme config loading',data:{hasLayout:!!Layout},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
// #endregion

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    // #region agent log
    fetch('http://127.0.0.1:7244/ingest/25df5bb8-6b26-448f-93cb-c2dbf83f83f2',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'theme/index.ts:15',message:'enhanceApp called',data:{hasApp:!!app,hasRouter:!!router},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    // Personnalisations du thème
  }
} satisfies Theme
