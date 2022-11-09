<template>
  <!-- https://vuetifyjs.com/en/components/timelines/#advanced -->
  <div>
    <v-container fluid>
      <v-row justify="center">
        <v-subheader>Today</v-subheader>

        <v-expansion-panels popout>
          <v-expansion-panel
            v-for="(message, i) in messages"
            :key="i"
            hide-actions
          >
            <v-expansion-panel-header>
              <v-row align="center" class="spacer" no-gutters>
                <v-col cols="4" sm="2" md="1">
                  <v-avatar size="36px">
                    <img
                      v-if="message.avatar"
                      alt="Avatar"
                      src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                    />
                    <v-icon
                      v-else
                      :color="message.color"
                      v-text="message.icon"
                    ></v-icon>
                  </v-avatar>
                </v-col>

                <v-col class="hidden-xs-only" sm="5" md="3">
                  <strong v-html="message.name"></strong>
                  <span v-if="message.total" class="grey--text">
                    &nbsp;({{ message.total }})
                  </span>
                </v-col>

                <v-col class="text-no-wrap" cols="5" sm="3">
                  <v-chip
                    v-if="message.new"
                    :color="`${message.color} lighten-4`"
                    class="ml-0 mr-2 black--text"
                    label
                    small
                  >
                    {{ message.new }} new
                  </v-chip>
                  <strong v-html="message.title"></strong>
                </v-col>

                <v-col
                  v-if="message.excerpt"
                  class="grey--text text-truncate hidden-sm-and-down"
                >
                  &mdash;
                  {{ message.excerpt }}
                </v-col>
              </v-row>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <v-divider></v-divider>
              <v-card-text v-text="lorem"></v-card-text>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>

    <!--  -->

    <v-card class="mx-auto" max-width="434" tile>
      <v-img
        height="100%"
        src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
      >
        <v-row align="end" class="fill-height">
          <v-col align-self="start" class="pa-0" cols="12">
            <v-avatar class="profile" color="grey" size="164" tile>
              <v-img
                src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
              ></v-img>
            </v-avatar>
          </v-col>
          <v-col class="py-0">
            <v-list-item color="rgba(0, 0, 0, .4)" dark>
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  Marcus Obrien
                </v-list-item-title>
                <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <!--  -->
            <v-list two-line>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/john.png"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>John Leider</v-list-item-title>
                  <v-list-item-subtitle>Author</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-switch
                    v-model="cycle"
                    label="Cycle Slides"
                    inset
                  ></v-switch>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
    <!--  -->

    <v-banner two-line>
      <v-avatar slot="icon" color="deep-purple accent-4" size="40">
        <v-icon icon="mdi-lock" color="white"> mdi-lock </v-icon>
      </v-avatar>

      Three line text string example with two actions. One to two lines is
      preferable. Three lines should be considered the maximum string length on
      desktop in order to keep messages short and actionable.

      <template v-slot:actions>
        <v-btn text color="deep-purple accent-4"> Action </v-btn>
        <v-btn text color="deep-purple accent-4"> Action </v-btn>
      </template>
    </v-banner>
    <!--  -->

    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <template v-slot:default="{ open }">
            <v-row no-gutters>
              <v-col cols="4"> Trip name </v-col>
              <v-col cols="8" class="text--secondary">
                <v-fade-transition leave-absolute>
                  <span v-if="open" key="0"> Enter a name for the trip </span>
                  <span v-else key="1">
                    {{ trip.name }}
                  </span>
                </v-fade-transition>
              </v-col>
            </v-row>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-text-field
            v-model="trip.name"
            placeholder="Caribbean Cruise"
          ></v-text-field>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header v-slot="{ open }">
          <v-row no-gutters>
            <v-col cols="4"> Location </v-col>
            <v-col cols="8" class="text--secondary">
              <v-fade-transition leave-absolute>
                <span v-if="open" key="0"> Select trip destination </span>
                <span v-else key="1">
                  {{ trip.location }}
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row no-gutters>
            <v-spacer></v-spacer>
            <v-col cols="5">
              <v-select
                v-model="trip.location"
                :items="locations"
                chips
                flat
                solo
              ></v-select>
            </v-col>

            <v-divider vertical class="mx-4"></v-divider>

            <v-col cols="3">
              Select your destination of choice
              <br />
              <a href="#">Learn more</a>
            </v-col>
          </v-row>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="secondary"> Cancel </v-btn>
            <v-btn text color="primary"> Save </v-btn>
          </v-card-actions>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header v-slot="{ open }">
          <v-row no-gutters>
            <v-col cols="4"> Start and end dates </v-col>
            <v-col cols="8" class="text--secondary">
              <v-fade-transition leave-absolute>
                <span v-if="open">When do you want to travel?</span>
                <v-row v-else no-gutters style="width: 100%">
                  <v-col cols="6">
                    Start date: {{ trip.start || 'Not set' }}
                  </v-col>
                  <v-col cols="6">
                    End date: {{ trip.end || 'Not set' }}
                  </v-col>
                </v-row>
              </v-fade-transition>
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row justify="space-around" no-gutters>
            <v-col cols="3">
              <v-menu
                ref="startMenu"
                :close-on-content-click="false"
                :return-value.sync="trip.start"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="trip.start"
                    label="Start date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.startMenu.isActive = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.startMenu.save(date)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>

            <v-col cols="3">
              <v-menu
                ref="endMenu"
                :close-on-content-click="false"
                :return-value.sync="trip.end"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="trip.end"
                    label="End date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.endMenu.isActive = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.endMenu.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data: () => ({
    messages: [
      {
        avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
        name: 'John Leider',
        title: 'Welcome to Vuetify!',
        excerpt: 'Thank you for joining our community...',
      },
      {
        color: 'red',
        icon: 'mdi-account-multiple',
        name: 'Social',
        new: 1,
        total: 3,
        title: 'Twitter',
      },
      {
        color: 'teal',
        icon: 'mdi-tag',
        name: 'Promos',
        new: 2,
        total: 4,
        title: 'Shop your way',
        exceprt: 'New deals available, Join Today',
      },
    ],
    lorem:
      'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
    cycle: true,
    date: null,
    trip: {
      name: '',
      location: null,
      start: null,
      end: null,
    },
    locations: [
      'Australia',
      'Barbados',
      'Chile',
      'Denmark',
      'Ecuador',
      'France',
    ],
  }),
};
</script>
