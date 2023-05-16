import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  constructor() { }

  ngOnInit() {}
  quesRep = [{
    que:'Comment s\'inscrire au service?',
    rep: 'Pour s\'inscrire au service myPoste vous pouvez soit ouvrir un compte avec l\'application mobile et ensuite importer vos comptes, soit déposer une demande au centre des chèques postaux.'
  },
    {
      que:'C\'est quoi myPoste?',
      rep: 'myPoste est un service financier 100% digitale qui vous permet de bénéficier de toutes les opérations financières de la Poste sur votre mobile avec une application mobile. myPoste est disponible gratuitement sur les 3 principaux store d\'applications (Google Play, Apple Store, Huawei AppGallery).'
    },
    {
      que:'Est-ce que ce service est payant?',
      rep: 'myPoste est un service gratuit aucune taxe ou frais supplémentaire ne vous sera appliqué. Seules les transactions que vous effectuez seront taxées.\n'
    }, {
      que:'Est-ce que je peux utiliser myPoste sur plusieurs mobile?',
      rep: 'Pour activer ce service vous devez présenter un numéro de gsm personnel, si vous avez plusqu\'un numéro vous pouvez installer et utiliser ce service sur plusieurs smartphones.'
    },{
      que:'Comment je peux consulter mes comptes CCP, Epargne et SICAV?',
      rep: 'Si vous êtes inscrit avec vos paramêtres de CCPnet vos comptes sont accessibles depuis (Consulter mes comptes) sinon veuillez les importer un à un depuis (Importer mes comptes Postaux), aprés la validation de votre demande par l\'équipe myPoste,vous trouverez votre compte sur l\'application.'
    },{
      que:'Pourquoi les services de myPoste ne sont pas tous activés?',
      rep: 'Le reste des services de myPoste seront activés prochainement, on vous informera de ces nouveautés au fur et à mesure sur l\'application.\n'
    },{
      que:'Je suis abonné CCPNet est-ce que je dois importer mes comptes?',
      rep: 'Si vous avez accédé à l\'application avec vos paramètres CCPNet, vous n\'avez pas besoin d\'importer vos comptes vous pouvez les trouver directement via la rubrique (Consulter mes comptes).'
    },{
      que:'Est-ce que l\'importation de compte est automatique?',
      rep: 'Votre demande d\'importation de compte sera examinée par l\'équipe myPoste et vous serez informé de la suite de votre demande via l\'application (Notifications), veuillez attendre le retour de myPoste avent de refaire une autre demande.'
    },{
      que:'Pourquoi ma demande d\'importation a été rejetée?',
      rep: 'Veuillez s\'assurer que les documents envoyés (CIN recto et verso, Justif du compte) sont claires et lisibles et que le selfie pris soit avec une copie du CIN dans la main juste au dessous du visage.'
    },{
      que:'Comment prendre un selfie avec CIN?',
      rep: 'Le selfie avec CIN est demandé au niveau de plusieurs services de l\'application. Pour prendre le selfie, veuillez procéder comme suit : 1)Tenir votre mobile dans une main, 2)Tenir votre CIN (Recto) avec l\'autre main juste au dessous de votre visage,3)Approcherla caméra du portable de votre visage et de la CIN de telle sorte que celle-ci soit lisible,4)Prendre le selfie.'
    },{
      que:'Comment utiliser le service virement?',
      rep: 'Un virement est une opération de transfert d\'argent depuis votre compte courant vers un autre compte postal ou bancaire, pour effectuer un virement vous devez commencer par ajouter le RIB de votre bénéficiaire (20 chiffres), ensuite passer votre ordre.\n'
    },{
      que:'Es ce que je peux transférer de l\'argent avec myPoste?',
      rep: 'Oui, avec la rubrique virement de myPoste vous pouvez envoyer de l\'argent vers un autre compte CCP, vers un autre compte Epargne, vers une carte Edinar ou vers un compte bancaire.'
    },{
      que:'A quoi peut m\'être utile le service virement?',
      rep: 'Vous pouvez payer votre loyer par un virement, Alimenter vos comptes d\'Epargne ouverts à la Poste, Alimenter vos cartes Edinar ou celles de vos proches par un simple virement, les montants seront transférés INSTANTANEMENT!'
    },{
      que:'Comment je peux alimenter ma carte edinar depuis mon compte CCP?',
      rep: 'Commencez par ajouter le RIB de votre carte parmi vos bénéficiaires (si vous n\'avez pas le RIB de la carte vous pouvez le demander par email centre_appel@poste.tn),une fois le bénéficiare est ajouté vous saisissez l\'ordre de virement en ajoutant le montant du virement et son motif. Validez ensuite votre transaction par votre mot de passe et par le code de sécurité que vous allez le recevoir par SMS, le transfert sera effectué INSTANTANEMENT.'
    },{
      que:'Pourquoi je ne trouve pas mon bénéficiaire?',
      rep: 'Lors de l\'ajout de votre premier bénéficiaire une validation par nos équipes est requise, pour les bénéficiaires qui viennent après ils seront disponibles automatiquement. Vous pouvez ajouter jusqu\'à 5 bénéficiaires et vous pouvez à tout moement supprimer un bénéficiaire non utilisé.'
    },{
      que:'Quel est le niveau de sécurité du service virement?',
      rep: 'Le virement comme toute autre opération sur myPoste nécessite une double validation par la re-saisie de votre mot de passe personnel et par la saisie d\'un code de sécurité envoyé par SMS sur votre numéro de gsm configuré.'
    }

  ]

}
