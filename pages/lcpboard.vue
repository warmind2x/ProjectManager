<template>
<div>

  <div class="mx-auto">
        <v-btn
      depressed
      color="danger"
      @click="createProject()"
    >
      New Project
    </v-btn>
  </div>
  <v-data-table
    :headers="headers"
    :items="projects"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
  
</div>
  
  
</template>


<script>
export default {
    middleware: 'Auth',
    name: 'lcp_board',
    data() {
      return {
        headers: [
          {
            text: 'LCP Code',
            align: 'start',
            sortable: false,
            value: 'lcpCode'
          },
          {text:'Tipo', value: 'type'},
          {text:'Capital (USD)', value: 'capital'},
          {text:'Expenses (USD)', value: 'expenses'},
          {text:'# Grafo Capital', value: 'grafoCap'},
          {text:'# Grafo Expenses', value: 'grafoExp'},
          {text:'Locacion', value: 'locacion'},
          {text:'Nombre', value: 'nombre'},
          
        ],
        projects:[],
      }
    },methods: {
      async getProjects() {
        const axiosHeaders = {
          headers: {
            token: this.$store.state.auth.token
          }
        };

        try {
          const res = await this.$axios.get("/project", axiosHeaders);
          console.log(res.data);
          if (res.data.status == 'success') {
            this.projects = res.data.data;
            
          }
          
        } catch (error) {
          alert(error)
          return ;
          
        }
      },
      async createProject(){
        const axiosHeaders = {
          headers: {
            token: this.$store.state.auth.token
          }
        };

        try {
          const res = await this.$axios.post("/project", axiosHeaders);
          console.log(res.data);
          
        } catch (error) {
          
        }

      }
    },mounted () {
      this.getProjects();
    },

}
</script>

<style>

</style>