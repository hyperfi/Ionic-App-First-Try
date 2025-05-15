<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
          <ion-buttons slot="start">
              <ion-back-button :default-href="defaultBackHref"> </ion-back-button>
          </ion-buttons>
        <ion-title>
            {{ title }}
        </ion-title>
        <ion-buttons slot="end">
            <slot name="right"></slot>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
        <slot></slot>
    </ion-content>
  </ion-page>
</template>


<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from '@ionic/vue';
export default {
    props: {
        title: {
            type: String,
            default: 'All Memories'
        },
        defaultBackHref: {
            type: String,
        }
    },
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton
  }
};
</script>

