using CandidateTrackerReact.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CandidateTrackerReact.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatesController : ControllerBase
    {
        private readonly string _connectionString;

        public CandidatesController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Route("addcandidate")]
        [HttpPost]
        public void AddCandidate(Candidate candidate)
        {
            var repo = new CandidatesRepository(_connectionString);
            repo.AddCandidate(candidate);
        }

        [Route("confirmcandidate")]
        [HttpPost]
        public void ConfirmCandidate(int id)
        {
            var repo = new CandidatesRepository(_connectionString);
            repo.ConfirmCandidate(id);
        }

        [Route("refusecandidate")]
        [HttpPost]
        public void RefuseCandidate(int id)
        {
            var repo = new CandidatesRepository(_connectionString);
            repo.RefuseCandidate(id);
        }


        [Route("getpendingcandidates")]
        [HttpGet]
        public List<Candidate> GetPendingCandidates()
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetPendingCandidates();
        }


        [Route("getcandidatebyid")]
        [HttpGet]
        public Candidate GetCandidateById(int id)
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetCandidateById(id);
        }

        [Route("getpendingcount")]
        [HttpGet]
        public int GetPendingCount()
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetPendingCount();
        }

        [Route("getconfirmedcandidates")]
        [HttpGet]
        public List<Candidate> GetConfirmedCandidates()
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetConfirmedCandidates();
        }

        [Route("getrefusedcandidates")]
        [HttpGet]
        public List<Candidate> GetRefusedCandidates()
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetRefusedCandidates();
        }

        [Route("getconfirmedcount")]
        [HttpGet]
        public int GetConfirmedCount()
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetConfirmedCount();
        }

        [Route("getrefusedcount")]
        [HttpGet]
        public int GetRefusedCount()
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetRefusedCount();
        }
    }
}
