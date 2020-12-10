import React, { Component } from "react";
import { Link } from "react-router-dom";
import { WORK_CITED } from "../../Routes";
// PBS_VIDEOS,
import DisplayVideo from "../../DisplayVideo";


class RobinWilliamsPage extends Component {
  render() {
    return (
      <div className="add-padding-bottom robin-williams-container">
        <div>
          {/* 
          Dear Mr. Williams

          Although you are unable to get this, I felt I should write to you anyway. 
          I was quite depressed while watching the documentaries covering your Life, as you are not only an idol to myself but several others as well. I chose to rewatch them, as I get very nauseous and I feel severely sick to my stomach thinking about the systemic issues we face today and the inevitable future we are headed towards.

          Although not directly related to the political scene in Collin County, we, along with millions of other Americans,  mourn the loss today, of Hollywood actor Robin Williams. As we take a moment to reflect back on the laughter and the joy he gave to so many of us. . .we are thankful for the smiles he generated across party lines. We are also thankful for the many serious roles he portrayed, which opened our eyes to the many collective problems and issues within our society.
          
          WHITE HOUSE STATEMENT FROM PRESIDENT OBAMA. August 11, 2014.
          “Robin Williams was an airman, a doctor, a genie, a nanny, a president, a professor, a bangarang Peter Pan, and everything in between. But he was one of a kind. He arrived in our lives as an alien — but he ended up touching every element of the human spirit. He made us laugh. He made us cry. He gave his immeasurable talent freely and generously to those who needed it most — from our troops stationed abroad to the marginalized on our own streets.”
          As we think back on Mr. Williams, and his storied career, let us also think ahead – –  and make an honest effort, to show a  little more kindness and gentility, compassion and social justice to those who need it most.
          "Robin Williams And The Stigma Of Mental Illness". Pacific Standard, 2020, https://psmag.com/social-justice/much-stigma-mental-illness-harm-robin-williams-88589. Accessed 15 Nov 2020.

          It’s tragic and upsetting the way media or local news portrays that it takes murder, death, loss, pain, suffering, or hate to get things done. In spite of the recent 2020 COVID Pandemic, the social and racial protests/riots, and general systemic issues we face today, your work remains to inspire generation after generation. Though not all the credit you get is solely yours, the teams you worked for and with, belie you: as their leader, idol, friend, and to have been the one to deserve and hold the honor of said credit.

          How they compare or contrast  in teaching about social injustice
          Twilight Los Angeles
          one-woman play; Smith gives voice to 40 real-life “characters,” from a Korean grocer to a Hollywood agent and a juror. The New York Times has called Smith “the ultimate impressionist – she does people’s souls.” The film is an account of how Korean, African American, & Mexican families were impacted during the 'riots', as well as how systemic racism has developed or became deep-rooted into our societies and police forces. Smith through all the families and interviewees calls out and advises against ignorance, hate, and violence. They call against the oppression, discrimination, and belittlement of the minorities and new arrivals. 
          Jumping from person to person without explaining the entire situation in great detail. It lacks a cohesive storytelling element and presents NO facts, statistics, or possible solutions that could have resolved things before, during, and after the situation. It lacks a reasonable explanation of what happened and attempts to make the viewer feel pity, disgust, anger, or depression as they are some of the easier pathos to provoke. Rather than finding a peaceful solution, it presents the violence that happened in the streets. 

          Whereas Robin Williams: Come Inside My Mind by Marina Zenovich, features personal archival material and new interviews with those who loved and knew Williams best, including Billy Crystal, Pam Dawber, David Letterman, Steve Martin, and many more. Robin Williams: Come Inside My Mind takes viewers through the one-of-a-kind actor and comedian's extraordinary life and career, revealing what drove him to give voice to the incredible characters he created in his mind.

          Told largely through Williams' own voice, captured in interviews and audio recordings, and with a wealth of never-before-seen footage, including home movies and film/TV outtakes, the film showcases Williams' boundless energy, lightning wit and knack for creating memorable characters on stage and screen. The documentary delves into the intricacies of a man who needed an audience just as much as audiences needed someone like him.

          Twilight may be worse because of the strong emotions it inflicts and the visceral portrayal of violence and rioting. 
          But Come Inside My Mind isn’t far off due to their softened tone towards the subjects of mental health and our impacts on others around us.

          */}
          <h4 className="text-center">
            Welcome, <br />
            I'd like to explain why I believe Robin Williams to be an Idol.
          </h4>
          <img src="https://www.chortle.co.uk/images/photos/small/mork_egg.jpg" width="320" alt="Mork Egg" />
          <DisplayVideo
            // video_url="https://player.pbs.org/viralplayer/2365320526/"
            video_url="https://www.pbs.org/video/pioneers-television-robin-williams-remembered/"
            site_url="https://www.pbs.org/video/pioneers-television-robin-williams-remembered/"
            site_title="PIONEERS OF TELEVISION: Robin Williams Remembered"
          />
          <img
            src="https://iamfearlesssoul.com/wp-content/uploads/2018/07/FBCOVERFS.jpg"
            width="320"
            alt="Everyone You Meet Is Fighting A Battle"
          />
          <p className="quote">
            "To properly understand an individual's discourse it is necessary to critically understand their position
            within the social hierarchy because language is a social practice through which the world is reified and can
            be used to exercise power, domination, resistance, and subordination (Fairclough, 1989, Van Dijk, 2006).
            <br />
            -(Can We All Get Along)."
          </p>
          I watched
          <p className="quote">
            "Twilight: Los Angeles 1992, a one-woman-documentary-play; Smith gives voice to 40 real-life “characters,”
            from a Korean grocer to a Hollywood agent and a juror. The New York Times has called Smith “the ultimate
            impressionist – she does people’s souls.” The film is an account of how Korean, African American, & Mexican
            families were impacted during the 'riots', as well as how systemic racism has developed or became
            deep-rooted into our societies and police forces. Smith through all the families and interviewees calls out
            and advises against ignorance, hate, and violence. They call against the oppression, discrimination, and
            belittlement of the minorities and new arrivals
            <br />
            -(Twilight: Los Angeles | About The Production)."
          </p>
          &
          <p className="quote">
            "Robin Williams: Come Inside My Mind, which takes it's viewers through the one-of-a-kind actor and
            comedian's extraordinary life and career, revealing what drove him to give voice to the incredible
            characters he created in his mind.
            <br />
            <br />
            Told largely through Williams' own voice, captured in interviews and audio recordings, and with a wealth of
            never-before-seen footage, including home movies and film/TV outtakes, the film showcases Williams'
            boundless energy, lightning wit and knack for creating memorable characters on stage and screen. The
            documentary also features personal archival material and new interviews with those who loved and knew
            Williams best, including Billy Crystal, Pam Dawber, David Letterman, Steve Martin and many more. Directed by
            Marina Zenovich, Robin Williams: Come Inside My Mind delves into the intricacies of a man who needed an
            audience just as much as audiences needed someone like him
            <br />
            -(Robin Williams: Come Inside My Mind)."
          </p>
          <p>(Introduce or explain photo and videos)</p>
          <img
            src="https://bayart.org/wp-content/uploads/2018/05/robin-williams-quotes-about-life.jpg"
            width="320"
            alt="Saddet People Always Try Their Hardest"
          />
          <DisplayVideo
            // video_url="https://player.pbs.org/viralplayer/2365320526/"
            video_url="https://www.pbs.org/video/pioneers-television-robin-williams-remembered/"
            site_url="https://www.pbs.org/video/pioneers-television-robin-williams-remembered/"
            site_title="PIONEERS OF TELEVISION: Robin Williams Remembered"
          />
          <DisplayVideo
            // video_url="https://player.pbs.org/viralplayer/2365233373/"
            video_url="https://www.pbs.org/video/pioneers-television-robin-williams-hones-his-craft/"
            site_url="https://www.pbs.org/video/pioneers-television-robin-williams-hones-his-craft/"
            site_title="PIONEERS OF TELEVISION: Robin Williams Hones his Craft"
          />
          <DisplayVideo
            // video_url="https://player.pbs.org/viralplayer/2365233384/"
            video_url="https://www.pbs.org/video/pioneers-television-jonathan-winters-mentors-robin-williams/"
            site_url="https://www.pbs.org/video/pioneers-television-jonathan-winters-mentors-robin-williams/"
            site_title="PIONEERS OF TELEVISION: Jonathan Winters 'Mentors' Robin Williams"
          />
          <a
            href="https://africacheck.org/fbcheck/worst-thing-in-life-quote-not-by-robin-williams-written-for-2009-movie/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.bucketlistpublications.com/wp-content/uploads/2014/08/f47e31a054ada8d327c8a53626b84faf.jpg"
              width="320"
              alt="I Used To Think"
            />
            <p>click here for more info</p>
            <p>Explain about miss information and the issues of interpretation vs intent</p>
          </a>
          <h4>Why I chose them and how they made me feel.</h4>
          <p>
            I was quite depressed while watching the documentaries covering Robin Williams Life, as he is not only an
            idol to myself but several others as well. Although he left us far too soon, his work, aspirations, and
            legacy will live on to inspire new generations.
            <br />
            <br />I chose to watch them, as I get very nauseous and I feel severely sick to my stomach thinking about
            the systemic issues we face today and the inevitable future we are headed towards.
          </p>
          <img
            src="https://cdn.powerofpositivity.com/wp-content/uploads/2015/08/11882887_1136351459713621_1768566688_o.jpg"
            width="320"
            alt="Seize The Day."
          />
          <img
            src="https://1zl13gzmcsu3l9yq032yyf51-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Robin-Williams-Quotes-1.png"
            width="320"
            alt="No Matter What People Tell You"
          />
          <div className="quote">
            <p>
              "Although not directly related to the political scene in Collin County, we, along with millions of other
              Americans, mourn the loss today, of Hollywood actor Robin Williams. As we take a moment to reflect back on
              the laughter and the joy he gave to so many of us... We are thankful for the smiles he generated across
              party lines. We are also thankful for the many serious roles he portrayed, which opened our eyes to the
              many collective problems and issues within our society.
            </p>
            <h6>WHITE HOUSE STATEMENT FROM PRESIDENT OBAMA. August 11, 2014.</h6>
            <p>
              'Robin Williams was an airman, a doctor, a genie, a nanny, a president, a professor, a bangarang Peter
              Pan, and everything in between. But he was one of a kind. He arrived in our lives as an alien — but he
              ended up touching every element of the human spirit. He made us laugh. He made us cry. He gave his
              immeasurable talent freely and generously to those who needed it most — from our troops stationed abroad
              to the marginalized on our own streets.' As we think back on Mr. Williams, and his storied career, let us
              also think ahead – – and make an honest effort, to show a little more kindness and gentility, compassion
              and social justice to those who need it most
              <br />
              -(Robin Williams And The Stigma Of Mental Illness)."
            </p>
          </div>
          <img
            src="https://www.movemequotes.com/wp-content/uploads/2015/08/IMG_7468.jpg"
            width="320"
            alt="Bad Times Wake You Up"
          />
          <DisplayVideo
            // video_url="https://player.pbs.org/viralplayer/2365489505/"
            video_url="https://www.pbs.org/video/blank-blank-robin-williams-masks/"
            site_url="https://www.pbs.org/video/blank-blank-robin-williams-masks/"
            site_title="BLANK ON BLANK: Robin Williams on Masks"
          />
          <img
            src="https://i.pinimg.com/originals/27/89/16/278916a08683012bb633d9c70664fd17.jpg"
            width="320"
            alt="You Know What Music Is"
          />
          <br />
          <p className="quote">
            According to Robin Williams’ widow, an autopsy has revealed that the comedian suffered from Lewy body
            dementia before he committed suicide. Susan Schneider Williams described the battle to treat and understand
            her late husband's symptoms as a game of Whac-A-Mole. William Brangham learns about the lesser-known but
            common illness from Dr. James Galvin of Florida Atlantic University.
          </p>
          <DisplayVideo
            // video_url="https://player.pbs.org/viralplayer/3031776866/"
            video_url="https://www.pbs.org/video/robin-1471vu/"
            site_url="https://www.pbs.org/video/robin-1471vu/"
            site_title="INSIDE THE COVER: Robin"
          />
          <DisplayVideo
            // video_url="https://player.pbs.org/viralplayer/2365305581/"
            video_url="https://www.pbs.org/video/chicago-tonight-august-11-2014-remembering-robin-williams/"
            site_url="https://www.pbs.org/video/chicago-tonight-august-11-2014-remembering-robin-williams/"
            site_title="CHICAGO TONIGHT: Remembering Robin Williams"
          />
          <img
            src="https://pmcaonline.org/wp-content/uploads/2019/08/robin-williams-Quote-1024x1024.jpg"
            width="320"
            alt="Still A Lot To Learn"
          />
          <img
            src="https://render.fineartamerica.com/images/rendered/default/print/6/8/break/images/artworkimages/medium/1/robin-williams-james-rodgers.jpg"
            width="320"
            alt="Robin Williams Actor Collage"
          />
          <p>(ADD MORE DETAILS)</p>
          <DisplayVideo
            // video_url="https://player.pbs.org/viralplayer/2365601348/"
            video_url="https://www.pbs.org/video/robin-williams-didn-t-know-he-had-this-mysterious-disease-1454024744/"
            site_url="https://www.pbs.org/video/robin-williams-didn-t-know-he-had-this-mysterious-disease-1454024744/"
            site_title="PBS NEWSHOUR: Robin Williams didn’t know he had this mysterious disease"
          />
          <DisplayVideo
            // video_url="https://player.pbs.org/viralplayer/2365305584/"
            video_url="https://www.pbs.org/video/chicago-tonight-august-11-2014-discussing-depression/"
            site_url="https://www.pbs.org/video/chicago-tonight-august-11-2014-discussing-depression/"
            site_title="CHICAGO TONIGHT: Discussing Depression"
          />
          <DisplayVideo
            // video_url="https://player.pbs.org/viralplayer/2365308829/"
            video_url="https://www.pbs.org/video/studio-socal-mental-illness-whats-new/"
            site_url="https://www.pbs.org/video/studio-socal-mental-illness-whats-new/"
            site_title="STUDIO SOCAL: Mental Illness, What's New?"
          />
        </div>
        {/* <button>
          <Link to={PBS_VIDEOS}>Please Watch These Videos</Link>
        </button> */}
        <button>
          <Link to={WORK_CITED}>Work Cited</Link>
        </button>
      </div>
    );
  }
}

export default RobinWilliamsPage;