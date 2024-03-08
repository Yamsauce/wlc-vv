function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t=globalThis.parcelRequire3018,n=t.register;n("iUPXV",function(n,i){e(n.exports,"SIWEController",()=>t("hbiEF").SIWEController),t("ZPkJV"),t("hbiEF"),t("762T6"),t("7Oukc")}),n("ZPkJV",function(n,i){e(n.exports,"Web3ModalSIWEClient",()=>a);var s=t("9CctF"),r=t("6JirK"),o=t("1b7jQ");class a{constructor(e){let{enabled:t=!0,nonceRefetchIntervalMs:n=r.ConstantsUtil.FIVE_MINUTES_IN_MS,sessionRefetchIntervalMs:i=r.ConstantsUtil.FIVE_MINUTES_IN_MS,signOutOnAccountChange:s=!0,signOutOnDisconnect:o=!0,signOutOnNetworkChange:a=!0,...l}=e;this.options={enabled:t,nonceRefetchIntervalMs:n,sessionRefetchIntervalMs:i,signOutOnDisconnect:o,signOutOnAccountChange:s,signOutOnNetworkChange:a},this.methods=l}async getNonce(){let e=await this.methods.getNonce();if(!e)throw Error("siweControllerClient:getNonce - nonce is undefined");return e}createMessage(e){let t=this.methods.createMessage(e);if(!t)throw Error("siweControllerClient:createMessage - message is undefined");return t}async verifyMessage(e){return await this.methods.verifyMessage(e)}async getSession(){let e=await this.methods.getSession();if(!e)throw Error("siweControllerClient:getSession - session is undefined");return e}async signIn(){let e=await this.methods.getNonce(),{address:t}=s.AccountController.state;if(!t)throw Error("An address is required to create a SIWE message.");let n=(0,o.HelpersUtil).caipNetworkIdToNumber(s.NetworkController.state.caipNetwork?.id);if(!n)throw Error("A chainId is required to create a SIWE message.");let i=this.methods.createMessage({address:t,nonce:e,chainId:n}),r=await (0,s.ConnectionController).signMessage(i);if(!await this.methods.verifyMessage({message:i,signature:r}))throw Error("Error verifying SIWE signature");let a=await this.methods.getSession();if(!a)throw Error("Error verifying SIWE signature");return this.methods.onSignIn&&this.methods.onSignIn(a),(0,s.RouterUtil).navigateAfterNetworkSwitch(),a}async signOut(){return this.methods.signOut()}}}),n("6JirK",function(t,n){e(t.exports,"ConstantsUtil",()=>i);let i={FIVE_MINUTES_IN_MS:3e5}}),n("hbiEF",function(n,i){e(n.exports,"SIWEController",()=>l);var s=t("8tzvu"),r=t("lDt57"),o=t("9CctF");let a=(0,r.proxy)({status:"uninitialized"}),l={state:a,subscribeKey:(e,t)=>(0,s.subscribeKey)(a,e,t),subscribe:e=>(0,r.subscribe)(a,()=>e(a)),_getClient(){if(!a._client)throw Error("SIWEController client not set");return a._client},async getNonce(){let e=this._getClient(),t=await e.getNonce();return this.setNonce(t),t},async getSession(){let e=this._getClient(),t=await e.getSession();return t&&(this.setSession(t),this.setStatus("success")),t},createMessage(e){let t=this._getClient().createMessage(e);return this.setMessage(t),t},async verifyMessage(e){let t=this._getClient();return await t.verifyMessage(e)},async signIn(){let e=this._getClient();return await e.signIn()},async signOut(){let e=this._getClient();await e.signOut(),this.setStatus("ready"),e.onSignOut?.()},onSignIn(e){let t=this._getClient();t.onSignIn?.(e)},onSignOut(){let e=this._getClient();e.onSignOut?.()},setSIWEClient(e){a._client=(0,r.ref)(e),a.status="ready",(0,o.OptionsController).setIsSiweEnabled(e.options.enabled)},setNonce(e){a.nonce=e},setStatus(e){a.status=e},setMessage(e){a.message=e},setSession(e){a.session=e}}}),n("762T6",function(e,n){var i=t("8lZNB"),s=t("dYFMW"),r=t("8oFEX"),o=t("9CctF");let a=class extends s.LitElement{constructor(){super(...arguments),this.dappImageUrl=o.OptionsController.state.metadata?.icons,this.walletImageUrl=(0,o.StorageUtil).getConnectedWalletImageUrl()}firstUpdated(){let e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return(0,s.html)`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};a.styles=r.default,function(e,t,n,i){var s,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);r>3&&o&&Object.defineProperty(t,n,o)}([(0,i.customElement)("w3m-connecting-siwe")],a)}),n("8oFEX",function(n,i){e(n.exports,"default",()=>r);var s=t("dYFMW"),r=(0,s.css)`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`}),n("7Oukc",function(e,n){var i=t("9CctF"),s=t("8lZNB"),r=t("dYFMW"),o=t("7AsZS"),a=t("hbiEF"),l=function(e,t,n,i){var s,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let c=class extends r.LitElement{constructor(){super(...arguments),this.dappName=i.OptionsController.state.metadata?.name,this.isSigning=!1}render(){return(0,r.html)`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="shade"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="fill"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,(0,i.EventsController).sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"});try{(0,a.SIWEController).setStatus("loading");let e=await (0,a.SIWEController).signIn();return(0,a.SIWEController).setStatus("success"),(0,i.EventsController).sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"}),e}catch(e){return(0,i.SnackController).showError("Signature declined"),(0,a.SIWEController).setStatus("error"),(0,i.EventsController).sendEvent({event:"SIWE_AUTH_ERROR",type:"track"})}finally{this.isSigning=!1}}async onCancel(){let{isConnected:e}=i.AccountController.state;e?(await (0,i.ConnectionController).disconnect(),(0,i.ModalController).close()):(0,i.RouterController).push("Connect"),(0,i.EventsController).sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"})}};l([(0,o.state)()],c.prototype,"isSigning",void 0),l([(0,s.customElement)("w3m-connecting-siwe-view")],c)});
//# sourceMappingURL=exports.2d101d2b.js.map
