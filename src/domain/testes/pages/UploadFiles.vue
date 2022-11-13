<template>
  <div>
    <!-- Input Component -->
    <v-row align="start" class="spacer" no-gutters style="width: 100%">
      <v-col cols="auto">
        <v-file-input
          v-model="currentFile"
          dense
          small-chips
          :accept="accept"
          :counter="counter"
          :label="label"
          :multiple="multiple"
          :outlined="outlined"
          :show-size="showSize"
          @change="selectFile"
        ></v-file-input>
      </v-col>

      <!-- Add to list button -->
      <v-col cols="2" class="pl-2" align-self="baseline">
        <v-btn
          color="light-green darken-3"
          dark
          @click="addListUpload"
          :disabled="disabledButtom"
        >
          {{ confirmButtonTag }}
          <v-icon right dark>mdi-check </v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <!-- Upload File(s) List -->
    <v-expansion-panels v-if="fileInfos.length > 0" class="mx-auto">
      <v-expansion-panel>
        <!-- Header -->
        <v-expansion-panel-header v-slot="{ open }">
          <v-row align="center" class="spacer" no-gutters style="width: 100%">
            <v-col cols="5">
              {{ listFilesTag }} ({{ fileInfos.length }})
            </v-col>
            <v-col cols="7" align="center" justify="center">
              <v-fade-transition leave-absolute>
                <v-row v-if="!open" no-gutters>
                  <v-col cols="12" align="right">
                    <v-btn
                      color="green"
                      outlined
                      @click.native.stop="confirmUpload"
                    >
                      {{ uploadButtonTag }}
                      <v-icon right dark> mdi-cloud-upload </v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-fade-transition>
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <!-- Content -->
        <v-expansion-panel-content>
          <v-list flat>
            <v-list-item v-for="(file, index) in fileInfos" :key="index">
              <v-list-item-content>
                <a :href="file.url">{{ file.name }}</a>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn color="primary" icon @click="deleteFromArray(file)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>

          <v-row no-gutters>
            <v-col cols="12" align="right">
              <v-btn color="green" outlined @click="confirmUpload">
                {{ uploadButtonTag }}
                <v-icon right dark> mdi-cloud-upload </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentFile: undefined,
      disabledButtom: true,
      fileInfos: [],
    };
  },
  methods: {
    /**
     * Adiciona e envia arquivo(s) para upload.
     */
    addListUpload() {
      this.currentFile.forEach((element) => {
        this.fileInfos.push(element);
      });

      this.currentFile = undefined;
    },
    confirmUpload() {
      this.$emit('input-files-upload', this.fileInfos);
      this.currentFile = undefined;
      this.disabledButtom = true;
      this.fileInfos = [];
    },
    /**
     * Seleciona arquivo(s) para lista de upload.
     */
    selectFile(file) {
      this.currentFile = file;
    },
    /**
     * Deleta arquivo da lista para upload.
     * @param índice do arquivo
     */
    deleteFromArray(i) {
      const index = this.fileInfos.indexOf(i);
      if (index > -1) {
        // only splice array when item is found
        this.fileInfos.splice(index, 1); // 2nd parameter means remove one item only
      }
    },
  },
  props: {
    /**
     * Arquivos e tipos de mídia aceitos
     */
    accept: {
      type: String,
      default: '',
    },
    /**
     * Tag para o botão de confirmar inclusão.
     */
    confirmButtonTag: {
      type: String,
      default: 'Confirm',
    },
    /**
     * Habilita contador de arquivos - Input.
     */
    counter: {
      type: Boolean,
      default: true,
    },
    /**
     * Tag para a label do componente - Input.
     */
    label: {
      type: String,
      default: 'File input',
    },
    /**
     * Tag para o título do form.
     */
    listFilesTag: {
      type: String,
      default: 'List of Files',
    },
    /**
     * Habilita múltiplos arquivos - Input.
     */
    multiple: {
      type: Boolean,
      default: true,
    },
    /**
     * Aplica o estilo delineado à entrada.
     */
    outlined: {
      type: Boolean,
      default: true,
    },
    /**
     * Habilita mostrador tamanho de arquivos - Input.
     */
    showSize: {
      type: Boolean,
      default: true,
    },
    /**
     * Tag para o botão de upload.
     */
    uploadButtonTag: {
      type: String,
      default: 'Upload',
    },
  },
  watch: {
    currentFile(newValue) {
      if (newValue) {
        this.disabledButtom = false;
      } else {
        this.disabledButtom = true;
      }
    },
  },
};
</script>
